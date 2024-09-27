import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete, removeTodo, editTodo }) {
  return (
    <div className="todo-list-container">
      <h2>All Tasks</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            index={index}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
