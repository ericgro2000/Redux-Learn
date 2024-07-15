import { combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
//import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
    cash:cashReducer,
    //customers:customerReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']