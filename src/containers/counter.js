import React from 'react';
const Counter = ({ todos }) => {
  return (
    <div>
      {todos.length} {todos.length === 1 ? 'todo' : 'todos'} present.
    </div>
  );
};

export default Counter;
