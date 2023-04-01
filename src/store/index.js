
// import { createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./auth"
import counterReducer from "./counter"


// const counterReducer = ( state = initialState, action ) => {

//     if ( action.type === "INCREAMENT" ) {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     } else if ( action.type === "INCREASE" ) {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     } 
//     else if ( action.type === "DECREAMENT" ) {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     } else if ( action.type === "SHOWCOUNT" ) {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     else {
//         return initialState
//     }
// }

const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer},
})

export default store