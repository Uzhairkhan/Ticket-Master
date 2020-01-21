import React from "react";
import { connect } from "react-redux";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile
    };
    this.setState({
      name: "",
      email: "",
      mobile: ""
    });
    // this.props.dispatch(newCustomer, this.props);
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="ex:- Stalin"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <p></p>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="e@youmail.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <p></p>
            <div className="form=group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                placeholder="998xxxxxxx"
                value={this.state.mobile}
                onChange={this.handleChange}
              />
            </div>

            <p></p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Form);
