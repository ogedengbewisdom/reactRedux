
// import { createStore } from "redux"
import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament(state) {
            state.counter++
        },
        decreament(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

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
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions

export default store