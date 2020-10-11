import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import WineSummaryItem from "./WineSummaryItem/WineSummaryItem";
import WineDetails from "./WineDetails/WineDetail";

class App extends Component {
  state = {
    winesummaries: [],
    selectedWine: null,
    fetchError: false,
  };

  //Axios is used for REST endpoints
  fetchWineSummaries = () => {
    axios
      .get("http://localhost:8080/wines/summary/")
      .then((response) => {
        this.setState({
          winesummaries: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response.status);
        this.setState({
          fetchError: true,
        });
      });
  };

  wineClickHandler = (id) => {
    axios.get("http://localhost:8080/wines/" + id).then((response) => {
      console.log(response.data);
      this.setState({
        selectedWine: response.data,
      });
    });
  };

  deleteWineHandler = (id) => {
    axios.get("http://localhost:8080/wines/" + id).then((response) => {
      console.log(response.data);
      this.setState({
        selectedWine: response.data,
      });
    });
  };

  //componentDidMount is react lifecycle method.
  componentDidMount() {
    this.fetchWineSummaries();
  }

  render() {
    let wineSummariesList = <p>Unable to fetch wine summaries</p>;
    if (!this.state.fetchError) {
      //key cannot be used inside the props, key is a built-in type for lists
      wineSummariesList = this.state.winesummaries.map((wineSummary) => {
        return (
          <WineSummaryItem
            key={wineSummary.id}
            id={wineSummary.id}
            year={wineSummary.year}
            name={wineSummary.name}
            clickHandler={() => this.wineClickHandler(wineSummary.id)}
          />
        );
      });
    }
    let wineDetails = <p>Please select a wine to view details</p>
    if(this.state.selectedWine){
      wineDetails = <WineDetails wine={this.state.selectedWine}/>
    }
    return (
      <div>
        {wineSummariesList}
        <hr/>
        {wineDetails}
      </div>
    );
    // return React.createElement('h1', null, "Hello from my very first react app updated.");
  }
}

export default App;
