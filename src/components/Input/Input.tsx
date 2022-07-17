import * as React from 'react';
import { v4 } from 'uuid';
import Button from '../Button/Button';
import './styleInput.scss';

interface Job {
  id: string;
  name: string;
  description: string;
}

interface InputProps {
  onClickAddBtn: (job: Job) => void;
}

interface InputState {
  textInput: string;
}

class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps | Readonly<InputProps>) {
    super(props);
    this.state = {
      textInput: '',
    };
  }

  onClickBtn = () => {
    // this.setState({ isClickedAddBtn: true });
    this.setState({ textInput: '' });
    const job = { id: v4(), name: this.state.textInput, description: ' ' };
    this.props.onClickAddBtn(job);
  };

  render() {
    return (
      <div className="inputBox">
        <input
          type="text"
          className="inputBox__input"
          placeholder="Enter to do ..."
          value={this.state.textInput}
          onChange={(event) => {
            this.setState({ textInput: event.target.value });
          }}
        />
        <Button
          nameBtn="Add"
          onClickBtn={this.onClickBtn}
          isEmptyInput={this.state.textInput === ''}
          className="AddBtn"
        />
      </div>
    );
  }
}

export default Input;
