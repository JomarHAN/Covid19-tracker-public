import { createSlice } from '@reduxjs/toolkit';

export const usaSlice = createSlice({
  name: 'usa',
  initialState: {
    isUsa: false,
  },
  reducers: {
    setIsUsa: (state, action) => {
      state.isUsa = action.payload.isUsa
    }
  },
});

export const { setIsUsa } = usaSlice.actions;

export const selectIsUsa = state => state.usa.isUsa;

export default usaSlice.reducer;
