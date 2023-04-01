import { createSlice } from "@reduxjs/toolkit"


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


export const authActions = authSlice.actions
export default authSlice.reducer