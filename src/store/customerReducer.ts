export interface Customer {
  id: number;
  name: string;
}

export interface CustomerState {
  customers: Customer[];
}

export interface Action {
  type: "ADD_CUSTOMER" | "REMOVE_CUSTOMER";
  payload: Customer;
}

const defaultState: CustomerState = {
  customers: [],
};

interface CustomerActionTypes {
  ADD_CUSTOMER: string;
  REMOVE_CUSTOMER: string;
}

const actionTypes: CustomerActionTypes = {
  ADD_CUSTOMER: "ADD_CUSTOMER",
  REMOVE_CUSTOMER: "REMOVE_CUSTOMER",
};

export const customerReducer = (state = defaultState, action: Action): CustomerState => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };
    case "REMOVE_CUSTOMER":
      return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload.id) };
    default:
      return state;
  }
};

export const addCustomerAction = (payload:Customer) => ({type: actionTypes.ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload:Customer) => ({type: actionTypes.REMOVE_CUSTOMER, payload})