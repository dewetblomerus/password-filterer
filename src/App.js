import React, { Component } from "react";
import "./App.css";
import LetterInput from "./LetterInput";
import PasswordList from "./PasswordList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Password Filterer</h1>
          <div className="input-boxes">
            <LetterInput letters={this._letters.bind(this)} index={0} />
            <LetterInput letters={this._letters.bind(this)} index={1} />
            <LetterInput letters={this._letters.bind(this)} index={2} />
            <LetterInput letters={this._letters.bind(this)} index={3} />
            <LetterInput letters={this._letters.bind(this)} index={4} />
          </div>
        </header>
        <PasswordList letters={this.state.letters} />
      </div>
    );
  }

  constructor() {
    super();

    this.state = {
      letters: ["", "", "", "", ""]
    };
  }

  _letters(letters, index) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.letters[index] = letters;
    this.setState({
      stateCopy
    });
  }
}

export default App;
