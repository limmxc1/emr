import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducer"

export default function reduxStore() {
  const store = configureStore({
    reducer
  })
  return store;
}