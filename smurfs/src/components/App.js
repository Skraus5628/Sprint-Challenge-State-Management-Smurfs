import React, { Component } from "react";
import "./App.css";

import SmurfList from "./SmurfList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wilkommen im Schlumpfdorf mit Redux</h1>
        <div className="list">
        <SmurfList />
        </div>
      </div>
    );
  }
}

export default App;
