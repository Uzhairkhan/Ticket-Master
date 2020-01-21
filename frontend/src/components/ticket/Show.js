import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pending from "./Pending";
import Completed from "./Completed";

export default function Show() {
  return (
    <div className="container">
      <div className="row md-mx-n5">
        <div className="col-md shadow p-3 mb-5 bg-white rounded border  flex p-2 bd-highlight mx-auto">
          <h5>Tickets</h5>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Pending">
              <Pending />
            </Tab>
            <Tab eventKey="profile" title="Completed">
              <Completed />
            </Tab>
          </Tabs>
          <Link to="/tickets/new">Add Tickets</Link>
        </div>
      </div>
    </div>
  );
}
