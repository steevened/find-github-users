import { createSlice } from '@reduxjs/toolkit';

export const DropdownSlice = createSlice({
  name: 'dropdown',
  initialState: false,
  reducers: {
    setDropDown: (state, action) => {
      const dropdown = action.payload;
      return dropdown;
    },
  },
});

export const { setDropDown } = DropdownSlice.actions;

export default DropdownSlice.reducer;
