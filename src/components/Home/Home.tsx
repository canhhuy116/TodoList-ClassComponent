import * as React from 'react';
import './styleHome.scss';
import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';

interface Job {
  id: string;
  name: string;
  description: string;
}

interface HomeProps {
  ListJob: Job[];
  onClickAddBtn: (job: Job) => void;
  onClickDeleteBtn: (job: Job) => void;
  idJobChangeColor: string;
}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div className="Home">
        <h2>TO DO LIST</h2>
        <Input onClickAddBtn={this.props.onClickAddBtn} />
        <TodoList
          ListJob={this.props.ListJob}
          onClickDeleteBtn={this.props.onClickDeleteBtn}
          idJobChangeColor={this.props.idJobChangeColor}
        />
      </div>
    );
  }
}

export default Home;
