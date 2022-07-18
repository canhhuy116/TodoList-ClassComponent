import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './styleTodo.scss';

interface Job {
  id: string;
  name: string;
  description: string;
}

interface TodoProps {
  todo: Job;
  onClickDeleteBtn: (job: Job) => void;
  theme: string;
}

interface TodoState {}

class Todo extends React.Component<TodoProps, TodoState> {
  onClickDelBtn = () => {
    this.props.onClickDeleteBtn(this.props.todo);
  };

  onClickDetailBtn = () => {};

  render() {
    return (
      <div className="todoBox">
        <div className="Todo">
          <span className={`${this.props.theme}`}>{this.props.todo.name}</span>
        </div>
        <div className="Buttons">
          <Button
            nameBtn="Delete"
            onClickBtn={this.onClickDelBtn}
            isEmptyInput={false}
            className="DeleteBtn"
          />
          <Link to={`/${this.props.todo.id}`} className="linkDetail">
            <Button
              nameBtn="Detail"
              isEmptyInput={false}
              onClickBtn={this.onClickDetailBtn}
              className="DetailBtn"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Todo;
