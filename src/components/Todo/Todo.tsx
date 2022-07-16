import * as React from 'react';
import Button from '../Button/Button';
import './styleTodo.scss';

interface Job {
  id: string;
  name: string;
}

interface TodoProps {
  todo: Job;
  onClickDeleteBtn: (job: Job) => void;
}

interface TodoState {}

class Todo extends React.Component<TodoProps, TodoState> {
  onClickDelBtn = () => {
    this.props.onClickDeleteBtn(this.props.todo);
  };

  render() {
    return (
      <div className="todoBox">
        <div className="Todo">
          <span>{this.props.todo.name}</span>
        </div>
        <div className="Buttons">
          <Button
            nameBtn="Delete"
            onClickBtn={this.onClickDelBtn}
            isEmptyInput={false}
          />
          {/* <Button nameBtn="Edit" /> */}
        </div>
      </div>
    );
  }
}

export default Todo;
