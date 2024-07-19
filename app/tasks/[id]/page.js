import { getTaskById } from '@/utils/actions';
import Link from 'next/link';
import EditForm from '../../../components/EditForm';

const SingleTaskPage = async ({ params }) => {
  const task = await getTaskById(params.id);
  console.log(task);

  return (
    <>
      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent'>
          Back to Tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};
export default SingleTaskPage;
