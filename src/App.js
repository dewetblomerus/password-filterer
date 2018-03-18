import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Password</h1>
          <LetterInput letters={this._letters.bind(this)} index={0} />
          <LetterInput letters={this._letters.bind(this)} index={1} />
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
    console.log("the state is");
    // console.log(this.state);
    this.setState({ letters: [letters, "", "", "", ""] });
    // console.log(this.state);
  }
}

class LetterInput extends Component {
  render() {
    return (
      <form className="App" onChange={this._handleSubmit.bind(this)}>
        <label>Character {this.props.index}</label>
        <div className="input-field">
          <input ref={input => (this._letters = input)} />
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();

    let letters = this._letters;

    this.props.letters(letters.value);
  }
}

class PasswordList extends Component {
  render() {
    let allPasswords = [
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

    function possiblePassword(password, letters) {
      return [...Array(5).keys()]
        .map(function(i) {
          if (letters[i] === "") {
            return true;
          } else {
            return letters[i].includes(password.charAt(i));
          }
        })
        .every(bool => bool);
    }

    function filteredPasswords(letters) {
      return allPasswords.filter(password =>
        possiblePassword(password, letters)
      );
    }

    let passwordList = filteredPasswords(this.props.letters).map(function(
      password
    ) {
      return <div key={password}>{password}</div>;
    });

    return (
      <div className="App">
        <div className="password-list">{passwordList}</div>
      </div>
    );
  }
}

export default App;
