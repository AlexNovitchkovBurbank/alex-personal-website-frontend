import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    numProjectsOnPage: 8
  },
  reducers: {
    setNumObjectsOnPage: (state, action) => {
      state.numProjectsOnPage = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setNumObjectsOnPage } = filterSlice.actions

export default filterSlice.reducer