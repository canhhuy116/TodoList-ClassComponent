import React from 'react';
import InputForm from '../InputForm/InputForm';
import { Context } from '../ThemeContext/ThemeContext';
import './styleDetail.scss';

interface Job {
  id: string;
  name: string;
  description: string;
}

interface DetailTodoProps {
  job: Job;
  handleChangeInfoJob: (job: Job) => void;
}

interface DetailTodoState {
  nameJob: string;
  desc: string;
}

class DetailTodo extends React.Component<DetailTodoProps, DetailTodoState> {
  constructor(props: DetailTodoProps | Readonly<DetailTodoProps>) {
    super(props);
    this.state = {
      nameJob: this.props.job.name,
      desc: this.props.job.description,
    };
  }
  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let updateJob: Job;
    updateJob = {
      id: this.props.job.id,
      name: this.state.nameJob,
      description: this.state.desc,
    };
    this.props.handleChangeInfoJob(updateJob);
  };

  changeInput = (name: string, value: string) => {
    if (name === 'name') {
      this.setState({ nameJob: value });
    } else if (name === 'description') {
      this.setState({ desc: value });
    }
  };

  render() {
    return (
      <Context.Consumer>
        {(contextTheme) => (
          <form
            className="formDetail"
            onSubmit={(event) => {
              this.handleSubmit(event);
              contextTheme.upDateColor(this.props.job.id);
            }}
          >
            <h2>{this.props.job.name}</h2>
            <div className="jobName">
              <label>Enter Job Name:</label>
              <InputForm
                name="name"
                value={this.props.job.name}
                changeInput={this.changeInput}
              />
            </div>
            <div className="jobDescription">
              <label>Enter Description:</label>
              <InputForm
                name="description"
                value={this.props.job.description}
                changeInput={this.changeInput}
              />
            </div>
            <input type="submit" className="submitBox" />
          </form>
        )}
      </Context.Consumer>
    );
  }
}

export default DetailTodo;
