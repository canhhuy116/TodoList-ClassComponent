import * as React from 'react';
import Button from '../Button/Button';
import './styleInput.scss';

interface InputProps {}

interface InputState {}

class Input extends React.Component<InputProps, InputState> {
  render() {
    return (
      <div className="inputBox">
        <input
          type="text"
          className="inputBox__input"
          placeholder="Enter to do ..."
        />
        <Button nameBtn="Add" />
      </div>
    );
  }
}

export default Input;
