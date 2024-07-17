import React from "react";

class UserClass extends React.Component {
  state = {
    userInfo: {
      name: "",
      url: "",
    },
  };

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/tarunsaithota");
    const data = await response.json();
    this.setState({
      userInfo: data,
    });
  }

  render() {
    return (
      <>
        <div className="aboutus-page">
          <div className="aboutus-title">
            <center>
              <h1>AboutUS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </center>
          </div>
          <div className="aboutus-card">
            <div className="card-left">
            <h3> {this.state.userInfo.name} 😎</h3>
            <p>🏢 {this.state.userInfo.company}</p>
            <p>📍 {this.state.userInfo.location}</p>
            <p>🌍 {this.state.userInfo.bio}</p>
            </div>
            <div className="card-right">
                <img src={this.state.userInfo.avatar_url} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserClass;
