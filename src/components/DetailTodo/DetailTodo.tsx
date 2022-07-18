import React from 'react';
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
              <input
                type="text"
                name="name"
                value={this.state.nameJob}
                onChange={(event) =>
                  this.setState({ nameJob: event.target.value })
                }
              />
            </div>
            <div className="jobDescription">
              <label>Enter Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.desc}
                onChange={(event) =>
                  this.setState({ desc: event.target.value })
                }
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
