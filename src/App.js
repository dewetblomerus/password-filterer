import React, { Component } from "react";
import "./App.css";
import LetterInput from "./LetterInput";
import PasswordList from "./PasswordList";

class App extends Component {
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

  render() {
    let inputList = [...Array(this.state.letters.length).keys()].map(index => {
      return <LetterInput letters={this._letters.bind(this)} index={index} />;
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Password Filterer</h1>
          <div className="input-boxes">{inputList}</div>
        </header>
        <PasswordList letters={this.state.letters} />
      </div>
    );
  }
}

export default App;
