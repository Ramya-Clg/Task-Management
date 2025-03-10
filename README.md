# Task Management App

A simple task management application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to create, view, and delete tasks.

## Features

- View all tasks with creation timestamps
- Add new tasks with title and description
- Delete existing tasks
- Form validation for task creation
- Responsive design with Tailwind CSS
- Real-time error handling and feedback

## Tech Stack

### Frontend
- React.js (with Hooks)
- Tailwind CSS for styling
- Vite as the build tool

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- Express Validator for input validation
- CORS enabled for cross-origin requests

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- pnpm package manager

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Backend Setup:
   ```bash
   cd server
   pnpm install
   ```
   
   Create a `.env` file in the server directory:
   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

3. Frontend Setup:
   ```bash
   cd client
   pnpm install
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd server
   node index.js
   ```
   The server will run on http://localhost:3000

2. Start the frontend development server:
   ```bash
   cd client
   pnpm dev
   ```
   The application will open in your browser at http://localhost:5173

## API Endpoints

### Tasks
- `GET /tasks` - Fetch all tasks
- `POST /tasks` - Create a new task
  - Required fields: `title`
  - Optional fields: `description`, `completed`
- `DELETE /tasks/:id` - Delete a task by ID

## Project Structure

```
task-management-app/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskItem.jsx
│   │   ├── App.jsx       # Main application component
│   │   └── main.jsx      # Application entry point
│   └── package.json
│
├── server/                # Backend Node.js application
│   ├── config/           # Configuration files
│   ├── db/              # Database models and connection
│   ├── routes/          # API routes
│   ├── index.js         # Server entry point
│   └── package.json
│
└── README.md
```
