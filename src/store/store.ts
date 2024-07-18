import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer, cashState } from "./cashReducer";
import { CustomerState, customerReducer } from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension"
import { thunk } from "redux-thunk";



const rootReducer = combineReducers({
    cash:cashReducer,
    customers:customerReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']