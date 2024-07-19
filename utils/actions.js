'use server';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

//get task by id
export const getTaskById = async (id) => {
  // const id = formData.get('id');
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

//edit task
export const editTask = async (formData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === 'on' ? true : false,
    },
  });
  redirect('/tasks');
};

export const createTask = async (formData) => {
  const content = formData.get('content');
  await prisma.task.create({
    data: {
      content,
    },
  });
  //revalidatepath = reloads page
  revalidatePath('/tasks');
};

export const createTaskCustom = async (prevState, formData) => {
  // ! simulate delay
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const content = formData.get('content');

  //! setup schema validation
  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    //revalidatepath = reloads page
    revalidatePath('/tasks');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error' };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');
  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePath('/tasks');
};
