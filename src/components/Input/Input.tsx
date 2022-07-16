import * as React from 'react';
import { v4 } from 'uuid';
import Button from '../Button/Button';
import './styleInput.scss';

interface Job {
  id: string;
  name: string;
}

interface InputProps {
  onClickAddBtn: (job: Job) => void;
}

interface InputState {
  textInput: string;
  isClickedAddBtn: boolean;
}

class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps | Readonly<InputProps>) {
    super(props);
    this.state = {
      textInput: '',
      isClickedAddBtn: false,
    };
  }

  onClickBtn = () => {
    this.setState({ isClickedAddBtn: true });
    const job = { id: v4(), name: this.state.textInput };
    this.props.onClickAddBtn(job);
  };

  render() {
    return (
      <div className="inputBox">
        <input
          type="text"
          className="inputBox__input"
          placeholder="Enter to do ..."
          onChange={(event) => {
            this.setState({ textInput: event.target.value });
          }}
        />
        <Button nameBtn="Add" onClickBtn={this.onClickBtn} />
      </div>
    );
  }
}

export default Input;
