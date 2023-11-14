import { createSlice } from "@reduxjs/toolkit";
import randomDocsTest from "../constants/randomDocsTest";

const defaultState = {
    docNotes: randomDocsTest.doc
}

const docSlice = createSlice({
    name: "docDocs",
    initialState: defaultState,
    reducers: {
        addDocDoc: (state, action) => {
            state.docNotes.unshift(action.payload)
        },
        deleteDocDoc: (state, action) => {
            state.docNotes = state.docNotes.filter(note => note.key !== action.payload)
        }
    }
})

// Selectors
export const selectAllDocs = state => state.doc
export default docSlice.reducer
export const { addDocDoc, deleteDocDoc } = docSlice.actions