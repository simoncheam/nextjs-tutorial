'use client';
import { createTaskCustom } from '@/utils/actions';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className='btn btn-primary join-item' disabled={pending}>
      {pending ? 'please wait' : 'create task'}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error');
      return;
    }
    if (state.message) {
      toast.success('task created');
    }
  }, [state]);

  return (
    <form action={formAction} className='my-2'>
      {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type your task here...'
          name='content'
          required
        />

        <SubmitButton />
      </div>
    </form>
  );
};
export default TaskFormCustom;
