import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    docNotes: [{
        goal: "",
        plan: "",
        discharge: ""
    }]
}

const docSlice = createSlice({
    name: "docDocs",
    initialState: defaultState,
    reducers: {
        addDocDoc: (state, action) => {
            state.docNotes.push(action.payload)
        },
    }
})

// Selectors
export const selectAllDocs = state => state.doc
export default docSlice.reducer
export const { addDocDoc } = docSlice.actions
console.log(docSlice)