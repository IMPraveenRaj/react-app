import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    //creating a state variable in a class
    this.state = {
      userInfo: {
        name: "Test",
        location: "default Location",
        avatar_url: "",
      },
    };
    console.log("child constuctor");
  }

  async componentDidMount() {
    console.log("chid Component did mount");
    const data = await fetch("https://api.github.com/users/IMPraveenRaj");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    console.log("child render method");
    const { login, location, email, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Location: {location == null ? "chennai" : location}</h3>
        <h4>Contact: {email}</h4>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
