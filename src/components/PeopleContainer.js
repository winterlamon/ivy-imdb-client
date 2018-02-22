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
    <div>
      {props.loading === true ? (
        <div>
          <div className="loader" />
        </div>
      ) : (
        <div>{allPeople}</div>
      )}
    </div>
  );
};

export default PeopleContainer;
