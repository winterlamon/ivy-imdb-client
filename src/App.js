import React, { Component } from "react";
import {} from "semantic-ui-react";
import BirthdayForm from "./components/BirthdayForm";

class App extends Component {
  findPeopleByBirthday(birthday) {
    return fetch(`http://localhost:3001/ivy-imdb/people/${birthday}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({ birthday })
    })
      .then(res => res.json())
      .then(people => console.log(people));
  }

  render() {
    return (
      <div>
        <h1>IVY IMDb Birthday Search</h1>
        <BirthdayForm findPeopleByBirthday={this.findPeopleByBirthday} />
      </div>
    );
  }
}

export default App;
