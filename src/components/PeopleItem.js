import React from "react";
import { Card, Image } from "semantic-ui-react";

const PeopleItem = props => {
  let person = props.person;
  return (
    <div>
      <Card className="card">
        <Card.Content>
          <Image
            floated="left"
            size="large"
            src={person.photoUrl}
            className="card-image"
          />
          <div className="card-content">
            <Card.Description>
              <h3>
                <a href={person.profileUrl} target="_blank">
                  {person.name}
                </a>
              </h3>
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
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default PeopleItem;
