import React from 'react';

const TodoListItem = ({ todo, onDeleteClicked }) => {
  console.log(todo);
  return (
    <li>
      <div className="todo-list-item-border">
        <span>
          <input id="checkBox" type="checkbox" />
          {todo} <button onClick={() => onDeleteClicked(todo)}>X</button>
        </span>
      </div>
    </li>
  );
};

export default TodoListItem;
