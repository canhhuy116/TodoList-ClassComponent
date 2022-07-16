import * as React from 'react';
import Todo from '../Todo/Todo';
import './styleTodoList.scss';

interface Job {
  id: string;
  name: string;
}
interface TodoListProps {
  ListJob: Job[];
  onClickDeleteBtn: (job: Job) => void;
}

interface TodoListState {}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  render() {
    return (
      <div className="TodoList">
        {this.props.ListJob.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onClickDeleteBtn={this.props.onClickDeleteBtn}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
