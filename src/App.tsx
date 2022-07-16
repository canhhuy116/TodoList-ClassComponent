import * as React from 'react';
import { json } from 'stream/consumers';
import './App.scss';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';

const TO_DO_LIST_STORAGE = 'TodoList';
interface Job {
  id: string;
  name: string;
}

interface AppProps {}

interface AppState {
  ListJob: Job[];
}

const DataStorage = localStorage.getItem(TO_DO_LIST_STORAGE);
let ListJobStorage: Job[];
ListJobStorage = [];
if (DataStorage) {
  ListJobStorage = JSON.parse(DataStorage);
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      ListJob: ListJobStorage,
    };
  }

  componentDidUpdate() {
    localStorage.setItem(
      TO_DO_LIST_STORAGE,
      JSON.stringify(this.state.ListJob)
    );
  }

  onClickAddBtn = (job: Job) => {
    this.setState({ ListJob: [...this.state.ListJob, job] });
  };

  onClickDeleteBtn = (job: Job) => {
    this.setState({
      ListJob: this.state.ListJob.filter((todo) => {
        return todo.id !== job.id;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <h2>TO DO LIST</h2>
        <Input onClickAddBtn={this.onClickAddBtn} />
        <TodoList
          ListJob={this.state.ListJob}
          onClickDeleteBtn={this.onClickDeleteBtn}
        />
      </div>
    );
  }
}

export default App;
