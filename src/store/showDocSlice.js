import { createSlice } from "@reduxjs/toolkit";

let defaultState = {
    showOrNot: true 
}

const showDocSlice = createSlice({
    name: "showDocs",
    initialState: defaultState,
    reducers: {
        showDoc: (state) => {
            state.showOrNot = true
        },
        selectDoc: (state, action) => {
            state.selectedDoc = action.payload
        }
    }
})

// Selectors
export default showDocSlice.reducer
export const { showDoc, selectDoc } = showDocSlice.actions