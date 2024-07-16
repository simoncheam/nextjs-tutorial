import prisma from '@/utils/db';
import Link from 'next/link';
import DeleteForm from './DeleteForm';

const TaskList = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium txt-lg'>No tasks...</h2>;
  }

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className='flex items-center justify-between px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'>
            <h2 className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>{task.content}</h2>
            <div className='flex gap-6 items-center'>
              <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>
                Edit
              </Link>
              <DeleteForm id={task.id} />
              {/* <button className='text-red-600'>Delete</button> */}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default TaskList;
