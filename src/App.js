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
  },
  {
    "name": "NEW HILL",
    "id": 7,
    "year": 2009
  }
]
  }
  render() {
    return (
      <div>
        {this.state.winesummaries.map(wineSummary=>{
          //key is an in-built property.
          return <WineSummaryItem key={wineSummary.id} year={wineSummary.year} name = {wineSummary.name}/>
        })}
      </div>
    );
    // return React.createElement('h1', null, "Hello from my very first react app updated.");
  }
}

export default App;
