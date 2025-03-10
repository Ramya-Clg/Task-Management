function TaskItem({ task, deleteTask }) {
    const formatDate = (dateString) => {
      const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
  
    return (
      <div className="border rounded-md p-4 hover:bg-gray-50">
        <div className="flex justify-between">
          <h3 className="font-medium text-lg">{task.title}</h3>
          
          <button
            onClick={() => deleteTask(task._id)}
            className="text-red-500 hover:text-red-700"
            aria-label="Delete task"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
        
        {task.description && (
          <p className="text-gray-600 mt-2">{task.description}</p>
        )}
        
        <div className="mt-3 text-sm text-gray-500">
          Created: {formatDate(task.createdAt)}
        </div>
      </div>
    );
  }
  
  export default TaskItem;