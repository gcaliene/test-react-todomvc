import React from 'react';
const Counter = ({ todos }) => {
  return (
    <div>
      {todos.length} {todos.length === 1 ? 'item' : 'items'}
    </div>
  );
};

export default Counter;
