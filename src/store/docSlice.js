import { createSlice } from "@reduxjs/toolkit";

const docSlice = createSlice({
    name: "docs",
    initialState: [],
    reducers: {
        addDoc: (state, action) => {
            state.push(action.payload)
        },
    }
})

// Selectors
export const selectAllDocs = state => state.doc


export default docSlice.reducer
export const { addDoc } = docSlice.actions