import { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setErrors({});
    
    const newTask = {
      title,
      description,
      completed: false
    };
    
    try {
      setIsSubmitting(true);
      const result = await addTask(newTask);      
      if (result && result.errors) {
        var formattedErrors = {};
        
        if (Array.isArray(result.errors)) {
          result.errors.forEach(err => {
            formattedErrors[err.path] = err.msg;
          });
        } else {
          formattedErrors = result.errors;
        }
        
        setErrors(formattedErrors);
      } else {
        setTitle('');
        setDescription('');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      setErrors({ form: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
      
      {errors.form && (
        <div className="mb-4 p-3 bg-red-50 text-red-500 border border-red-200 rounded-md">
          {errors.form}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter task title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter task description (optional)"
            rows="3"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">{errors.description}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-medium py-2 px-4 rounded-md transition duration-300 ${
            isSubmitting 
              ? 'bg-blue-300 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isSubmitting ? 'Adding Task...' : 'Add Task'}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;