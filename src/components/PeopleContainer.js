import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

import PeopleItem from "./PeopleItem";

const PeopleContainer = props => {
  const allPeople =
    props.people.length > 0
      ? props.people.map(person => (
          <PeopleItem key={person.name} person={person} />
        ))
      : null;

  return (
    <div>
      {props.loading === true ? (
        <div>
          <Dimmer active inline="centered" size="large">
            <Loader>Loading</Loader>
          </Dimmer>
        </div>
      ) : (
        <div>{allPeople}</div>
      )}
    </div>
  );
};

export default PeopleContainer;
