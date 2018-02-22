import React from "react";

import PeopleItem from "./PeopleItem";

const PeopleContainer = props => {
  const allPeople =
    props.people.length > 0
      ? props.people.map(person => (
          <PeopleItem key={person.name} person={person} />
        ))
      : null;

  return (
    <div className="people-container">
      {props.loading === true ? (
        <div className="loader-container">
          <div className="loader" />
        </div>
      ) : (
        <div>{allPeople}</div>
      )}
    </div>
  );
};

export default PeopleContainer;
