
import { createStore } from "redux"


const counterReducer = ( state = {counter: 0}, action ) => {

    if ( action.type === "INCREAMENT" ) {
        return {
            counter: state.counter + 1
        }
    } else if ( action.type === "DECREAMENT" ) {
        return {
            counter: state.counter - 1
        }
    } else {
        return state
    }
}

const store = createStore(counterReducer)

export default store