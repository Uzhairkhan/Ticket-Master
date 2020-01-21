import React from "react";

export default function Pending() {
  return (
    <div className="container">
      <h3>Tickets - </h3>
      <div className="row">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Code No</th>
              <th scope="col">Customer</th>
              <th scope="col">Department</th>
              <th scope="col">Employees</th>
              <th scope="col">Message</th>
              <th scope="col">Priority</th>
              <th scope="col">Action</th>
              <th scope="col">Remove</th>
              <th scope="col">Complete</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
