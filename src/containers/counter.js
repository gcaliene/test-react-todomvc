import React from 'react';
const Counter = ({ todos }) => {
  // console.log('3');
  return (
    <div>
      Total todo(s): <strong>{todos.length}</strong>
    </div>
  );
};

export default Counter;
