
// import { createStore } from "redux"
import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
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

const initialAuthState = {
    authentication: false
}

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        logIn( state ) {
            state.authentication = true
        },
        logout( state ) {
            state.authentication = false
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
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
})

export const counterActions = counterSlice.actions

export const authActions = authSlice.actions

export default store