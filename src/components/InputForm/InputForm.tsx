import * as React from 'react';

interface InputFormProps {
  name: string;
  value: string;
  changeInput: (name: string, value: string) => void;
}

interface InputFormState {
  name: string;
  value: string;
}

class InputForm extends React.Component<InputFormProps, InputFormState> {
  constructor(props: InputFormProps | Readonly<InputFormProps>) {
    super(props);
    this.state = {
      name: this.props.name,
      value: this.props.value,
    };
  }

  render() {
    return (
      <>
        <input
          type="text"
          name={this.props.name}
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
            this.props.changeInput(this.state.name, event.target.value);
          }}
        />
      </>
    );
  }
}

export default InputForm;
