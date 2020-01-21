import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Show() {
  return (
    <div className="container">
      <h3>Customers - </h3>
      <div>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Action</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <Link to="/customers/new">Add Customer</Link>
    </div>
  );
}
export default connect()(Show);
