import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-gray-500">No tasks available. Add a new task to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
      
      <div className="space-y-4">
        {tasks.map(task => (
          <TaskItem 
            key={task._id} 
            task={task} 
            deleteTask={deleteTask} 
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;