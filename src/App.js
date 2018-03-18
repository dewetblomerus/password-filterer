import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let passwords = [
      "about",
      "after",
      "again",
      "below",
      "could",
      "every",
      "first",
      "found",
      "great",
      "house",
      "large",
      "learn",
      "never",
      "other",
      "place",
      "plant",
      "point",
      "right",
      "small",
      "sound",
      "spell",
      "still",
      "study",
      "their",
      "there",
      "these",
      "thing",
      "think",
      "three",
      "water",
      "where",
      "which",
      "world",
      "would",
      "write"
    ];

    let passwordList = passwords.map(function(password) {
      return <li>{password}</li>;
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <ul>{passwordList}</ul>
        </p>
      </div>
    );
  }
}

export default App;
