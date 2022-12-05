import { createSlice } from '@reduxjs/toolkit';

export const IsLoadingSlice = createSlice({
  name: 'IsLoading',
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsLoading } = IsLoadingSlice.actions;

export default IsLoadingSlice.reducer;
