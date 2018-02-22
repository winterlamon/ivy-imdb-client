import React from "react";
import PeopleItem from "./PeopleItem";

const PeopleContainer = props => {
  const allPeople = props.people.map(person => (
    <PeopleItem key={person.name} person={person} />
  ));

  return <div>{allPeople}</div>;
};

export default PeopleContainer;
