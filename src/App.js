import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the task being edited

  // Array of emoticons
  const emoticons = [
    '😊', '😎', '🎉', '🔥', '✨', '🚀', '🌟', '💻', '🎯', '🏆'
  ];

  const addTodo = (task, category) => {
    // Randomly select an emoticon
    const randomEmoticon = emoticons[Math.floor(Math.random() * emoticons.length)];

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { ...updatedTodos[editIndex], text: task, category, emoticon: updatedTodos[editIndex].emoticon };
      setTodos(updatedTodos);
      setEditIndex(null); // Reset after editing
    } else {
      setTodos([...todos, { text: task, completed: false, category, emoticon: randomEmoticon }]);
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed; // Toggle completed state
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove task by index
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index); // Set the index of the task being edited
  };

  return (
    <div className="app-container">
      <h1>ToDo List with Task Groups</h1>
      <AddToDo addTodo={addTodo} editIndex={editIndex} todos={todos} editTodo={editTodo} />
      <ToDoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
