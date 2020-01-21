import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Show() {
  return (
    <div className="container">
      <div className="row mx-md-n5">
        <div className="col-md">
          <h3>Employees - </h3>
          <div>
            <table className="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Department</th>
                  <th scope="col">Action</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>

          <Link to="/employees/new">Add Employee</Link>
        </div>
      </div>
    </div>
  );
}

export default connect()(Show);
