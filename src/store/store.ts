import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer, cashState } from "./cashReducer";
import { CustomerState, customerReducer } from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension"
import { thunk } from "redux-thunk";

interface rootReducer {
    // idk
    // cash: (arg0: cashState,arg1: action) => void
    // customers: (arg0: CustomerState,arg1: Action) => void
    cash: cashState;
    customers: CustomerState;
  }

const rootReducer = combineReducers<rootReducer>({
    cash:cashReducer,
    customers:customerReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']