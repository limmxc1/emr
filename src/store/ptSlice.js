import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    ptNotes: [{
        goal: "",
        plan: "",
        discharge: ""
    }]
}

const ptSlice = createSlice({
    name: "ptDocs",
    initialState: defaultState,
    reducers: {
        addPtDoc: (state, action) => {
            state.ptNotes.push(action.payload)
        },
    }
})

// Selectors
export const selectAllDocs = state => state.doc
export default ptSlice.reducer
export const { addPtDoc } = ptSlice.actions