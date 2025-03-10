# Task Management App

A simple task management application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to create, view, and delete tasks.

## Features

- View all tasks
- Add new tasks with title and description
- Delete existing tasks
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend
- React.js (with Hooks for state management)
- Tailwind CSS for styling
- Vite as the build tool

### Backend
- Node.js with Express.js for the REST API
- MongoDB with Mongoose for data storage

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or a MongoDB Atlas connection)

### Backend Setup
1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm run dev
   ```
   The server will run on http://localhost:5000

### Frontend Setup
1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   The application will open in your browser at http://localhost:5173

## API Endpoints

- `GET /tasks` - Fetch all tasks
- `POST /tasks` - Add a new task
- `DELETE /tasks/:id` - Delete a task by ID

## Project Structure

```
task-management-app/
├── client/             # Frontend React app
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskItem.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── tailwind.config.js
├── server/             # Backend Node.js app
│   ├── index.js        # Express server and API routes
│   └── package.json
└── README.md           # Project documentation
```

## Future Improvements

- Add task editing functionality
- Implement authentication
- Add task categories or labels
- Implement task completion toggle
- Add sorting and filtering options