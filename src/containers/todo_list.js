import React from 'react';
import TodoListItem from './todo_list_item';
import Counter from './counter';

const TodoList = props => {
  const todos = props.todos;
  // console.log(todos);
  const todoItems = todos.map((todo, index) => {
    return (
      <div>
        <TodoListItem
          onDeleteClicked={props.onDeleteClicked}
          key={index}
          todo={todo}
        />
      </div>
    );
  });
  return (
    <div>
      <ul>{todoItems}</ul>
      <Counter todos={todos} />
    </div>
  );
};

export default TodoList;
