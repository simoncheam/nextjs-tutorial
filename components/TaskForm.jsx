//! contains barebones functionality to create a task
import { createTask } from '@/utils/actions';

const TaskForm = () => {
  return (
    <form action={createTask} className='my-2'>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type your task here...'
          name='content'
          required
        />
        <button type='submit' className='btn btn-primary join-item'>
          Create Task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
