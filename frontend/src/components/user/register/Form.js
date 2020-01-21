import React from "react";
import { connect } from "react-redux";
import { startUsersRegister } from "../../../action/users";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    this.props.dispatch(startUsersRegister(formData, this.props));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="USERNAME"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <p></p>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="EMAIL"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <p></p>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <p></p>
            <input className="btn btn-primary" type="submit" value="Register" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Form);
