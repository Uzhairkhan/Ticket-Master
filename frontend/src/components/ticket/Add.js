import React from "react";
import Form from "./New";

export default function New() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-3 mb-5 bg-white rounded border  flex p-2 bd-highlight mx-auto">
          <h3>Add Ticket</h3>
          <Form />
        </div>
      </div>
    </div>
  );
}
