import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const someMessage = 'A new react app message';
    return (
      <div>
        <h1>{someMessage + 2}</h1>
      </div>
    );
    // return React.createElement('h1', null, "Hello from my very first react app updated.");
  }
}

export default App;
