import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "../reduxStateLogic/filterSlice"

export const filterStore = configureStore({
  reducer: {
    filter: filterReducer
  }
})

export type RootState = ReturnType<typeof filterStore.getState>;