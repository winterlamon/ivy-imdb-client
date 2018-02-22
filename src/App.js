import React, { Component } from "react";
import {} from "semantic-ui-react";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";

class App extends Component {
  state = {
    people: []
  };

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
      .then(peopleResults => this.setState({ people: peopleResults }));
  }

  resetPeople() {
    this.setState({ people: [] });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="app">
          <h1>IVY IMDb Birthday Search</h1>
          <MainContainer
            findPeopleByBirthday={this.findPeopleByBirthday}
            resetPeople={this.resetPeople}
            people={this.state.people}
          />
        </div>
      </div>
    );
  }
}

export default App;
