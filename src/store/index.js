import {createStore, combineReducers} from "redux";
import {currentBookReducer} from "./currentBookReducer"
import {allBooksReducer} from "./allBooksReducer";

const rootReducer = combineReducers({
    allBooksReducer,
    currentBookReducer,
})

export const store = createStore(rootReducer)