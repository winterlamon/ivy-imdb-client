import React from "react";
import { Card, Image } from "semantic-ui-react";

const PeopleItem = props => {
  let person = props.person;
  return (
    <div>
      <Card className="card">
        <Card.Content>
          <Image floated="left" size="large" src={person.photoUrl} />
          <Card.Header>
            <a href={person.profileURL}>{props.name}</a>
          </Card.Header>
          <Card.Description>
            <p>
              <strong>Most Known Work</strong>
            </p>
            <p>
              <strong>Title: </strong>
              {person.mostKnownWork.title}
            </p>
            <p>
              <strong>Rating: </strong>
              {person.mostKnownWork.rating}
            </p>
            <p>
              <strong>Director: </strong>
              {person.mostKnownWork.director}
            </p>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default PeopleItem;
