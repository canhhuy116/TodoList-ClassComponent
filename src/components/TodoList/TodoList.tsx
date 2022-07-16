import * as React from 'react';
import Todo from '../Todo/Todo';
import './styleTodoList.scss';

interface Job {
  id: string;
  name: string;
}
interface TodoListProps {
  ListJob: Job[];
}

interface TodoListState {}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  render() {
    return (
      <div className="TodoList">
        {this.props.ListJob.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

export default TodoList;
