import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  talksData: [],
};

export const talksSlice = createSlice({
  name: "talks",
  initialState,
  reducers: {
    updateTalks: (state, action) => {
      state.talksData = action.payload;
    },
  },
});

export const { updateTalks } = talksSlice.actions;

export default talksSlice.reducer;
