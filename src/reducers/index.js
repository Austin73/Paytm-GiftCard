import { combineReducers } from "redux";
import numberReducers from "./numberReducers";
import changeReducer from './changeReducer'
import thankyoureducer from "./thankyoureducer";
import AddNumberreducer from "./AddNumberreducer";
const allReducers=combineReducers({
    number:numberReducers,
    isdigit:changeReducer,
    thankyou:thankyoureducer,
    addnumber:AddNumberreducer
})

export default allReducers