import React, { Component } from "react";
import "./App.css";

class LetterInput extends Component {
  render() {
    return (
      <form className="Letter-input" onChange={this._handleSubmit.bind(this)}>
        <label>Character {this.props.index + 1}</label>
        <div className="input-field">
          <input ref={input => (this._letters = input)} />
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();

    let letters = this._letters;

    this.props.letters(letters.value, this.props.index);
  }
}

export default LetterInput;
