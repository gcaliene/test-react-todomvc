import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = props => {
  const todos = props.todos;
  console.log(todos);
  const todoItems = todos.map((todo, index) => {
    return <TodoListItem key={index} todo={todo} />;
  });
  return <ul>{todoItems}</ul>;
};

export default TodoList;
