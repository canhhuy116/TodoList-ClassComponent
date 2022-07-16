import * as React from 'react';
import Todo from '../Todo/Todo';
import './styleTodoList.scss';

interface TodoListProps {}

interface TodoListState {}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  render() {
    return (
      <div className="TodoList">
        <Todo />
        <Todo />
        <Todo />
      </div>
    );
  }
}

export default TodoList;
