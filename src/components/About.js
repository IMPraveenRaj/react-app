import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component did Mount");
  }

  render() {
    console.log("parent render method");
    return (
      <div>
        <h1>About</h1>

        <h2>This is Spring Heaven</h2>

        <UserClass></UserClass>
      </div>
    );
  }
}
export default About;
