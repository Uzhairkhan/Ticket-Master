import React from "react";
import Form from "./Form";
import { connect } from "react-redux";

function Add() {
  return (
    <div className="container">
      <div className="row mx-md-n5">
        <div className="col-md-6 offset-md-2 shadow p-3 mb-5 bg-white rounded border  flex p-2 bd-highlight mx-auto">
          <h4>Add Employee</h4>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default connect()(Add);
