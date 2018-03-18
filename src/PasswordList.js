import React, { Component } from "react";
import "./App.css";

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

    return <div className="Password-list">{passwordList}</div>;
  }
}

export default PasswordList;
