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
    const nums = [1,2,3,4];
    const newNums = nums.map(num => {
      return 'Item-' + num;
    })
    return (
      <div>
        <p>{newNums}</p>
      </div>
    );
    // return React.createElement('h1', null, "Hello from my very first react app updated.");
  }
}

export default App;
