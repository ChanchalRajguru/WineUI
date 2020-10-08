import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import WineSummaryItem from "./WineSummaryItem/WineSummaryItem";

class App extends Component {
  state = {
    winesummaries: [],
  };

  //Axios is used for REST endpoints
  fetchWineSummaries = () => {
    axios.get("http://localhost:8080/wines/summary/").then((response) => {
      this.setState({
        winesummaries: response.data,
      });
      console.log(response.data);
    });
  };

  //componentDidMount is react lifecycle method.
  componentDidMount() {
    this.fetchWineSummaries();
  }

  render() {
    return (
      <div>
        {this.state.winesummaries.map((wineSummary) => {
          //key is an in-built property.
          return (
            <WineSummaryItem
              key={wineSummary.id}
              year={wineSummary.year}
              name={wineSummary.name}
            />
          );
        })}
      </div>
    );
    // return React.createElement('h1', null, "Hello from my very first react app updated.");
  }
}

export default App;
