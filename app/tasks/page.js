import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';

const TasksPage = () => {
  return (
    <div className='max-w-lg'>
      {/* <h1 className='text-7xl'>TasksPage</h1> */}
      <TaskForm />
      <TaskList />
    </div>
  );
};
export default TasksPage;
