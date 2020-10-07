import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WineSummaryItem from "./WineSummaryItem/WineSummaryItem";

class App extends Component {
  state = {
    winesummaries : [      
      {
      "name": "CHATEAU DE SAINT COSME",
      "id": 1,
      "year": 2009
  },
  {
      "name": "LAN RIOJA CRIANZA",
      "id": 2,
      "year": 2006
  },
  {
      "name": "MARGERUM SYBARITE",
      "id": 3,
      "year": 2010
  },
  {
    "name": "REX HILL",
    "id": 5,
    "year": 2009
  }
]
  }
  render() {
    const someMessage = "A new react app message";
    return (
      <div>
        <WineSummaryItem year={this.state.winesummaries[0].year} type={this.state.winesummaries[0].name}/>
        <WineSummaryItem year={this.state.winesummaries[1].year} type={this.state.winesummaries[1].name}/>
        <WineSummaryItem year={this.state.winesummaries[2].year} type={this.state.winesummaries[2].name}/>
        <WineSummaryItem year={this.state.winesummaries[3].year} type={this.state.winesummaries[3].name}/>
      </div>
    );
    // return React.createElement('h1', null, "Hello from my very first react app updated.");
  }
}

export default App;
