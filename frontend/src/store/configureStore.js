import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersReducer from "../reducers/users";
import customersReducer from "../reducers/customers";
import departmentReducer from "../reducers/departmentReducer";
import employeesReducer from "../reducers/employeeReducer";
import ticketReducer from "../reducers/ticketReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      users: usersReducer,
      customers: customersReducer,
      departments: departmentReducer,
      employees: employeesReducer,
      tickets: ticketReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
