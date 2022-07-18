import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import DetailTodo from './components/DetailTodo/DetailTodo';
import Home from './components/Home/Home';

const TO_DO_LIST_STORAGE = 'TodoList';
interface Job {
  id: string;
  name: string;
  description: string;
}

interface AppProps {}

interface AppState {
  ListJob: Job[];
}

const LocalStorage = () => {
  const DataStorage = localStorage.getItem(TO_DO_LIST_STORAGE);
  let ListJobStorage: Job[];
  ListJobStorage = [];
  if (DataStorage) {
    ListJobStorage = JSON.parse(DataStorage);
  }
  return ListJobStorage;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      ListJob: LocalStorage(),
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
      ListJob: this.state.ListJob.filter((todo) => todo.id !== job.id),
    });
  };

  idJobChangeColor = '';

  handleChangeInfoJob = (job: Job) => {
    this.setState({
      ListJob: this.state.ListJob.map((todo) =>
        todo.id === job.id ? (todo = job) : todo
      ),
    });
    this.idJobChangeColor = job.id;
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                ListJob={this.state.ListJob}
                onClickAddBtn={this.onClickAddBtn}
                onClickDeleteBtn={this.onClickDeleteBtn}
                idJobChangeColor={this.idJobChangeColor}
              />
            }
          />
          {this.state.ListJob.map((todo) => {
            return (
              <Route
                key={todo.id}
                path={`/${todo.id}`}
                element={
                  <DetailTodo
                    job={todo}
                    handleChangeInfoJob={this.handleChangeInfoJob}
                  />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
