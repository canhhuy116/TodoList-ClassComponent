import React from 'react';

interface ThemeContextProps {
  children: JSX.Element;
}

interface ThemeContextState {
  idJob: string;
  theme: string;
}

const Context = React.createContext({
  idJob: '',
  theme: '#000',
  upDateColor: (id: string) => {},
});

class ThemeContext extends React.Component<
  ThemeContextProps,
  ThemeContextState
> {
  constructor(props: ThemeContextProps | Readonly<ThemeContextProps>) {
    super(props);
    this.state = {
      idJob: '',
      theme: '#000',
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor = (id: string) => {
    this.setState({ idJob: id, theme: 'yellow' });
  };

  render() {
    return (
      <Context.Provider
        value={{
          idJob: this.state.idJob,
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
