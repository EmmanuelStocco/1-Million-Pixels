import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import { MyTimer } from "./components/Timer/Timer";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div> Cronometro </div>
        <MyTimer />


        <div>Guerra Pixels </div>
        <div className="Subtext">Click em um pixel para adicionar cor</div>
        <Grid />
      </div>
    );
  }
}

export default App;
