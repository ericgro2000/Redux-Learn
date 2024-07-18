import { Dispatch } from "redux";
import { addCustomersAction } from "../customerReducer";
import { AppDispatch } from "../store";

export const fetchCustomers = () => {
  return function(dispatch: Dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addCustomersAction(json))
      );
  };
};