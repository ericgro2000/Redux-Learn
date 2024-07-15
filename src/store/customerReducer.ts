
export interface State {
    cash: number;
  }
  
  interface action {
    type: "ADD_CASH" | "GET_CASH";
    payload: number;
  }
  
  const defaultState: State = {
    cash:0,
  }
  
  export  const customerReducer = (state = defaultState, action:action) => {
    switch (action.type) {
    case "ADD_CASH":
    return {...state, cash: state.cash + action.payload}
    case "GET_CASH":
    return {...state, cash: state.cash - action.payload}
    default:
    return state
    }
  }
  