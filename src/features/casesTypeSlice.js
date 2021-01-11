import { createSlice } from '@reduxjs/toolkit';

export const casesTypeSlice = createSlice({
  name: 'casesType',
  initialState: {
    casesType: 'cases',
  },
  reducers: {
    setCasesType: (state, action) => {
      state.casesType = action.payload
    }
  },
});

export const { setCasesType } = casesTypeSlice.actions;

export const selectCasesType = state => state.casesType.casesType;

export default casesTypeSlice.reducer;
