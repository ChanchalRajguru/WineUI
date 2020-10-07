import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WineSummaryItem from "./WineSummaryItem/WineSummaryItem";

class App extends Component {
  render() {
    const someMessage = "A new react app message";
    return (
      <div>
        <WineSummaryItem />
        <WineSummaryItem />
        <WineSummaryItem />
        <WineSummaryItem />
      </div>
    );
    // return React.createElement('h1', null, "Hello from my very first react app updated.");
  }
}

export default App;
