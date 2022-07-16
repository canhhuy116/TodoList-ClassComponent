import * as React from 'react';
import './App.scss';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="App">
        <h2>TO DO LIST</h2>
        <Input />
        <TodoList />
      </div>
    );
  }
}

export default App;
