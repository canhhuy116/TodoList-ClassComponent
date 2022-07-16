import * as React from 'react';
import './App.scss';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import { v4 } from 'uuid';

interface Job {
  id: string;
  name: string;
}

interface AppProps {}

interface AppState {
  ListJob: Job[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      ListJob: [],
    };
  }

  onClickAddBtn = (job: Job) => {
    this.setState({ ListJob: [...this.state.ListJob, job] });
  };

  render() {
    return (
      <div className="App">
        <h2>TO DO LIST</h2>
        <Input onClickAddBtn={this.onClickAddBtn} />
        <TodoList />
      </div>
    );
  }
}

export default App;
