import React from "react";
import { connect } from "react-redux";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newDep = {
      department: this.state.department
    };
    this.setState({ department: "" });
    console.log(newDep);
  };

  render() {
    return (
      <div className="container">
        <div className="row mx-md-n5">
          <div className=" shadow p-3 mb-5 bg-white rounded border  flex p-2 bd-highlight mx-auto">
            <h3>Add Department</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="department"
                  className="form-control"
                  value={this.state.department}
                  onChange={this.handleChange}
                />
              </div>
              <input type="submit" value="Add" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Add);
