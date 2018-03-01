import React from 'react';
import TodoListItem from './todo_list_item';
import Counter from './counter';

const TodoList = props => {
  const todos = props.todos;

  const todoItems = todos.map((todo, index) => {
    return (
      <TodoListItem
        key={index}
        id={index}
        onDeleteClicked={props.onDeleteClicked}
        todo={todo}
      />
    );
  });
  return (
    <div>
      <ul className="todo-list-container">{todoItems}</ul>
      <Counter todos={todos} />
    </div>
  );
};

export default TodoList;
