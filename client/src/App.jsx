import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:3000';

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/tasks`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Please try again later.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      const data = await response.json();

      if (!response.ok) {
        return data;
      }

      setTasks([data, ...tasks]);
      
      return null;
    } catch (err) {
      console.error('Error adding task:', err);
      return {
        errors: {
          form: 'Network error. Please check your connection and try again.'
        }
      };
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }

      setTasks(tasks.filter(task => task._id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting task:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center my-6 text-blue-600">Task Management App</h1>
        
        <TaskForm addTask={addTask} />
        
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <p>{error}</p>
          </div>
        )}
        
        {loading ? (
          <div className="text-center py-4">
            <p className="text-gray-500">Loading tasks...</p>
          </div>
        ) : (
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        )}
      </div>
    </div>
  );
}

export default App;