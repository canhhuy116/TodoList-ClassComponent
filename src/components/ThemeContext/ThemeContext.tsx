import React from 'react';

interface ThemeContextProps {
  children: JSX.Element;
}

interface ThemeContextState {
  jobIds: string[];
  theme: string;
}

const Context = React.createContext({
  idJob: [''],
  theme: '',
  upDateColor: (id: string) => {},
});

class ThemeContext extends React.Component<
  ThemeContextProps,
  ThemeContextState
> {
  constructor(props: ThemeContextProps | Readonly<ThemeContextProps>) {
    super(props);
    this.state = {
      jobIds: [],
      theme: '#000',
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor = (id: string) => {
    this.setState({ jobIds: [...this.state.jobIds, id], theme: 'yellow' });
  };

  render() {
    return (
      <Context.Provider
        value={{
          idJob: this.state.jobIds,
          theme: this.state.theme,
          upDateColor: this.changeColor,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context, ThemeContext };
