import { createSlice } from "@reduxjs/toolkit";

let defaultState = {
}

const showDocSlice = createSlice({
    name: "showDocs",
    initialState: defaultState,
    reducers: {
        selectDoc: (state, action) => {
            state.selectedDoc = action.payload
        }
    }
})

// Selectors
export default showDocSlice.reducer
export const { selectDoc } = showDocSlice.actions