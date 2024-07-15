export interface customerState {
  name: string[];
}

export interface Action {
  type: "ADD_CUSTOMER" | "REMOVE_CUSTOMER";
  payload: string;
}

const defaultState: customerState = {
  name: [],
}

export const customerReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, name: [...state.name, action.payload] };
    case "REMOVE_CUSTOMER":
      return { ...state, name: state.name.filter(name => name !== action.payload) };
    default:
      return state;
  }
}