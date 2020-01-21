import axios from "../config/axios";
import swal from "sweetalert";
import { startSetCustomers } from "./customers";
import { startSetDepartments } from "./department";
import { startSetEmployees } from "./employee";
import { startSetTickets } from "./ticket";

export const setUsers = (user) => {
  console.log("setUser", user);
  return {
    type: "LOG_USER",
    payload: user
  };
};

export const startUsersRegister = (formData, props) => {
  return (dispatch) => {
    axios.post("/users/register", formData).then((user) => {
      if (user.data.hasOwnProperty("errors")) {
        swal({
          title: "Fields cannot be empty",
          icon: "error"
        });
      } else {
        swal({
          title: "succesfully registered",
          icon: "success"
        });
        props.history.push("/login");
      }
    });
  };
};

export const startLogUser = (formData, props) => {
  return (dispatch) => {
    // if (formData.email == "") {
    //   swal({
    //     title: "WARNING",
    //     text: "email field cannot be empty",
    //     icon: "warning"
    //   });
    // } else if (formData.password == "") {
    //   swal({
    //     title: "WARNING",
    //     text: "password field cannot be empty",
    //     icon: "warning"
    //   });
    // } else {

    // }
    axios.post("/users/login", formData).then((res) => {
      console.log(res);
      if (res.data.hasOwnProperty("error")) {
        swal({
          title: "WARNING",
          text: res.data.error,
          icon: "warning"
        });
      } else if (formData.password == "") {
        swal({
          title: "WARNING",
          text: res.data,
          icon: "warning"
        });
      } else {
        const token = res.data.token;
        localStorage.setItem("authToken", token);

        const url1 = axios.get("/users/account", {
          headers: { "x-auth": token }
        });
        const url2 = axios.get("/customers", {
          headers: { "x-auth": token }
        });
        const url3 = axios.get("/departments", {
          headers: { "x-auth": token }
        });
        const url4 = axios.get("/employees", {
          headers: { "x-auth": token }
        });

        Promise.all([url1, url2, url3, url4]).then((values) => {
          console.log("values", values);
          const [
            usersResponse,
            customersResponse,
            departmentsResponse,
            employeesResponse
          ] = values;
          dispatch(setUsers(usersResponse.data));
          dispatch(startSetCustomers(customersResponse.data));
          dispatch(startSetDepartments(departmentsResponse.data));
          dispatch(startSetEmployees(employeesResponse.data));
          dispatch(startSetTickets());
        });

        props.history.push("/");
      }
    });
  };
};

export const startGetUser = () => {
  return (dispatch) => {
    axios
      .get("/users/account", {
        headers: {
          "x-auth": localStorage.getItem("authToken")
        }
      })
      .then((response) => {
        const user = response.data;
        console.log("user", user);
        dispatch(setUsers(user));
      });
  };
};
