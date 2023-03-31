
import { createStore } from "redux"

const initialState = {
    counter: 0,
    showCounter: true
}

const counterReducer = ( state = initialState, action ) => {

    if ( action.type === "INCREAMENT" ) {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    } else if ( action.type === "INCREASE" ) {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    } 
    else if ( action.type === "DECREAMENT" ) {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    } else if ( action.type === "SHOWCOUNT" ) {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    else {
        return initialState
    }
}

const store = createStore(counterReducer)

export default store