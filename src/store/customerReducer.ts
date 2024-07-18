export interface Customer {
  id: number;
  name: string;
}

export interface CustomerState {
  customers: Customer[];
}

export interface Action {
  type: "ADD_CUSTOMER" | "REMOVE_CUSTOMER"|"ADD_CUSTOMERS";
  payload: Customer;
}

const defaultState: CustomerState = {
  customers: [],
};

export const customerReducer = (state = defaultState, action: Action): CustomerState => {
  switch (action.type) {
    case "ADD_CUSTOMERS":
      return { ...state, customers: [...state.customers, ...action.payload] };
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };
    case "REMOVE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter(
          customer => customer.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const addCustomersAction = (payload:Customer) => ({type: "ADD_CUSTOMERS", payload})
export const addCustomerAction = (payload:Customer) => ({type: "ADD_CUSTOMER", payload})
export const removeCustomerAction = (payload:Customer) => ({type: "REMOVE_CUSTOMER", payload})