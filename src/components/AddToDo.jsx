import React, { useState, useEffect } from 'react';

function AddToDo({ addTodo, editIndex, todos }) {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (editIndex !== null) {
      const taskToEdit = todos[editIndex];
      setTask(taskToEdit.text);
    } else {
      setTask('');
    }
  }, [editIndex, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task); // Add task without category
    setTask(''); // Reset the input field after adding
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">{editIndex !== null ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default AddToDo;
