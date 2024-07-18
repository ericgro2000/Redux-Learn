import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { cashReducer, CashState } from "./cashReducer";
import { customerReducer, CustomerState } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";

export interface RootState {
  cash: CashState;
  customers: CustomerState;
}

const rootReducer: Reducer<RootState> = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
