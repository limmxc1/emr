import { createSlice } from "@reduxjs/toolkit";
import randomDocsTest from "../constants/randomDocsTest";

const defaultState = {
    ptNotes: randomDocsTest.pt
}

const ptSlice = createSlice({
    name: "ptDocs",
    initialState: defaultState,
    reducers: {
        addPtDoc: (state, action) => {
            state.ptNotes.unshift(action.payload)
        },
    }
})

// Selectors
export const selectAllDocs = state => state.doc
export default ptSlice.reducer
export const { addPtDoc } = ptSlice.actions