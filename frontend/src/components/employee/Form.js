import React from "react";
import { connect } from "react-redux";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      department: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newEmp = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      department: this.state.department
    };
    this.setState({
      name: "",
      email: "",
      mobile: "",
      department: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <p></p>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <p></p>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            className="form-control"
            value={this.state.mobile}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select className="form-control" id="department">
            <option>Select</option>
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    );
  }
}

export default connect()(Form);
