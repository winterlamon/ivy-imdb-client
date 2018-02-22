import React from "react";
import BirthdayForm from "./BirthdayForm";
import PeopleContainer from "./PeopleContainer";

const MainContainer = props => {
  return (
    <div id="main">
      <p>
        Welcome to IVY IMDb's most powerful name search. Using the options below
        you can create a list of people who were born on the selected date. Want
        a list of people born today? People that share your birthday? You can
        find them here.
      </p>
      <p>
        Once you've searched a birthday, you can view its results directly using
        the API endpoint.
        <em> Example: http://localhost:3001/ivy-imdb/people/12-02</em>
      </p>
      <BirthdayForm
        findPeopleByBirthday={props.findPeopleByBirthday}
        resetPeople={props.resetPeople}
      />
      <PeopleContainer people={props.people} loading={props.loading} />
    </div>
  );
};

export default MainContainer;
