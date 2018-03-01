import React from 'react';

const TodoListItem = ({ todo }) => {
  console.log(todo);
  return (
    <li>
      <div className="todo-list-item-border">
        <span>{todo} </span>
        <button>X</button>
      </div>
    </li>
  );
};

export default TodoListItem;
