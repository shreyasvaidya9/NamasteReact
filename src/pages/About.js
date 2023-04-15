import React from "react";
import Profile from "../components/UI/Profile";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to Food Villa</p>
    </div>
  );
};

class About2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us</h1>
        <p>Welcome to Food Villa</p>
        <Profile name={"First Child"} />
      </div>
    );
  }
}

export default About;
