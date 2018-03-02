import React from 'react';
const Counter = ({ todos }) => {
  return (
    <div>
      <strong>{todos.length}</strong> {todos.length === 1 ? 'todo' : 'todos'}{' '}
      present.
    </div>
  );
};

export default Counter;
