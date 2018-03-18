import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Password</h1>
        </header>
        <LetterInput firstLetters={this._firstLetters.bind(this)} />
        <PasswordList firstLetters={this.state.firstLetters} />
      </div>
    );
  }

  constructor() {
    super();

    this.state = {
      firstLetters: ""
    };
  }

  _firstLetters(letters) {
    this.setState({ firstLetters: letters });
  }
}

class LetterInput extends Component {
  render() {
    return (
      <form className="App" onChange={this._handleSubmit.bind(this)}>
        <label>First Character</label>
        <div className="input-field">
          <input ref={input => (this._letters = input)} />
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();

    let letters = this._letters;

    this.props.firstLetters(letters.value);
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

    console.log(this.props.firstLetters);

    let filteredPasswords = allPasswords.filter(password =>
      this.props.firstLetters.includes(password.charAt(0))
    );

    let passwordList = filteredPasswords.map(function(password) {
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
