import * as React from 'react';
import Button from '../Button/Button';
import './styleTodo.scss';

interface TodoProps {}

interface TodoState {}

class Todo extends React.Component<TodoProps, TodoState> {
  render() {
    return (
      <div className="todoBox">
        <div className="Todo">
          <span>Item1</span>
        </div>
        <div className="Buttons">
          <Button nameBtn="Delete" />
          <Button nameBtn="Edit" />
        </div>
      </div>
    );
  }
}

export default Todo;
