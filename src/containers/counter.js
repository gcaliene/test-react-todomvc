import React from 'react';
const Counter = ({ todos }) => {
  return (
    <div>
      Total todo(s): <strong>{todos.length}</strong>
    </div>
  );
};

export default Counter;
