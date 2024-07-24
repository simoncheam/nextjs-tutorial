'use client';
import { deleteTask } from '@/utils/actions';
import { useFormStatus } from 'react-dom';

//create submit button
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' className='btn btn-xs btn-error' disabled={pending}>
      {pending ? 'please wait' : 'delete'}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <SubmitButton />
    </form>
  );
};
export default DeleteForm;
