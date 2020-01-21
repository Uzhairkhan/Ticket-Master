import React from "react";
import { connect } from "react-redux";
import { startLogUser } from "../../../action/users";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password
    };
    this.setState({
      email: "",
      password: ""
    });
    this.props.dispatch(startLogUser(formData, this.props));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default connect()(Form);
