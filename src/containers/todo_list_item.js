import React from 'react';
import Checkbox from './checkbox';

const TodoListItem = ({ todo, onDeleteClicked, onCompletedClicked, id }) => {
  console.log(todo);
  return (
    <li>
      <div className="todo-list-item-border">
        <span>
          <Checkbox />
          {todo} <button onClick={() => onDeleteClicked(todo)}>X</button>
        </span>
      </div>
    </li>
  );
};

export default TodoListItem;
