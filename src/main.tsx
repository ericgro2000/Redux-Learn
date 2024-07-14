import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { createStore } from "redux"

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

const reducer = (state = defaultState, action:action) => {
  switch (action.type) {
  case "ADD_CASH":
  return {...state, cash: state.cash + action.payload}
  case "GET_CASH":
  return {...state, cash: state.cash - action.payload}
  default:
  return state
  }
}



const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store = {store}>
     <App /> 
    </Provider>
  </React.StrictMode>,
)
