import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

interface IProp {
  link: string;
}

const CorrectLink = (prop: IProp) => (
  <a href={prop.link} target="_blank">
    {prop.link}
  </a>
);
const UnCorrectLink = (prop: IProp) => (
  <a href={prop.link} target="_blank" rel="noopener noreferrer">
    {prop.link}
  </a>
);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://www.google.com">Go to google</a>
        <br />
        <CorrectLink link="http://example.com/correct" />
        <br />
        <UnCorrectLink link="http://example.com/uncorrect" />
        <br />
      </div>
    );
  }
}

export default App;
