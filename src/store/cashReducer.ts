
export interface CashState {
  cash: number;
}
  
export interface action {
    type: "ADD_CASH" | "GET_CASH";
    payload: number;
}
  
const defaultState: CashState = {
    cash:0,
}
  
export  const cashReducer = (state = defaultState, action:action) => {
    switch (action.type) {
    case "ADD_CASH":
    return {...state, cash: state.cash + action.payload}
    case "GET_CASH":
    return {...state, cash: state.cash - action.payload}
    default:
    return state
  }
}
  
