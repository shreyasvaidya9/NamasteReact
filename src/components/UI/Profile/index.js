import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " - constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " - componentDidMount");
  }

  render() {
    console.log(this.props.name + " - render");
    return (
      <div>
        <h1>Profile Page</h1>
        <p>This is profile page.</p>
      </div>
    );
  }
}
export default Profile;
