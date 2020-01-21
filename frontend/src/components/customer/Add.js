import React from "react";
import { connect } from "react-redux";
import Form from "./Form";

function Add() {
  return (
    <div className="container">
      <div className="row mx-md-n5">
        <div className="col-md-5 offset-md-4 shadow p-3 mb-5 bg-white rounded border  flex p-2 bd-highlight mx-auto">
          <h3>Add Customer</h3>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default connect()(Add);
