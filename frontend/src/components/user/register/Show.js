import React from "react";
import Form from "./Form";

export default function Show(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-3 mb-5 bg-white rounded border  flex p-2 bd-highlight mx-auto">
          <h2>Register</h2>
          <Form {...props} />
        </div>
      </div>
    </div>
  );
}
