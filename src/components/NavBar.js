import React from "react";
import { Header, Image } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Header as="h3" block className="header" textAlign="left">
      <Image
        width="150"
        alt="IMDb Logo 2016"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/512px-IMDB_Logo_2016.svg.png"
      />
    </Header>
  );
};

export default NavBar;
