import { createStore } from "redux";
import { reducerData } from "./Reducer"

const storeState = createStore(reducerData)
export default storeState
