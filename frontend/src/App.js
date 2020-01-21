import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import axios from "./config/axios";
import swal from "sweetalert";
import { connect } from "react-redux";
import _ from "lodash";

import Home from "./components/Home";
import Show from "./components/user/register/Show";
import ShowLogin from "./components/user/login/Show";
import ShowCustomer from "./components/customer/Show";
import AddCustomer from "./components/customer/Add";
import ShowDepartment from "./components/department/Show";
import ShowEmployee from "./components/employee/Show";
import AddEmployee from "./components/employee/Add";
import ShowTicket from "./components/ticket/Show";
import AddTicket from "./components/ticket/Add";
import "bootstrap/dist/css/bootstrap.css";

function App(props) {
  const handleLogout = () => {
    axios
      .delete("/users/logout", {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then((response) => {
        localStorage.removeItem("authToken");
        swal({
          title: "Success",
          text: response.data.notice,
          icon: "success"
        });

        console.log(response);
      });
  };

  return (
    <BrowserRouter class="container">
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#E6E6FA" }}
      >
        <div>
          <h2>
            <Link className="navbar-brand" to="/">
              Ticket Master
            </Link>
          </h2>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav">
            {_.isEmpty(props.user) ? (
              <div className="nav">
                <div className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </div>
                <div className="nav">
                  <div className="nav-item">
                    <Link className="nav-link" to="/customers">
                      Customer
                    </Link>
                  </div>
                </div>
                <div className="nav">
                  <div className="nav-item">
                    <Link className="nav-link" to="/departments">
                      Departments
                    </Link>
                  </div>
                </div>
                <div className="nav">
                  <div className="nav-item">
                    <Link className="nav-link" to="/employees">
                      Employees
                    </Link>
                  </div>
                </div>
                <div className="nav">
                  <div className="nav-item">
                    <Link className="nav-link" to="/tickets">
                      Tickets
                    </Link>
                  </div>
                </div>
                <div className="nav">
                  <div className="nav-item">
                    <Link className="nav-link" to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="nav">
                <div className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </div>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/register" component={Show} />
        <Route path="/login" component={ShowLogin} />
        <Route path="/customers" component={ShowCustomer} exact={true} />
        <Route path="/customers/new" component={AddCustomer} />
        <Route path="/departments" component={ShowDepartment} />
        <Route path="/employees" component={ShowEmployee} exact={true} />
        <Route path="/employees/new" component={AddEmployee} />
        <Route path="/tickets" component={ShowTicket} exact={true} />
        <Route path="/tickets/new" component={AddTicket} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
