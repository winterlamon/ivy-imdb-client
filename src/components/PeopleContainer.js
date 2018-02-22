import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
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
          <Segment>
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
          </Segment>
        </div>
      ) : (
        <div>{allPeople}</div>
      )}
    </div>
  );
};

export default PeopleContainer;
