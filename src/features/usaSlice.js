import { createSlice } from '@reduxjs/toolkit';

export const usaSlice = createSlice({
  name: 'usa',
  initialState: {
    isUsa: false,
    usCenter: [40, -110],
    usZoom: 3.5
  },
  reducers: {
    setUsView: (state, action) => {
      state.usCenter = action.payload.usCenter;
      state.usZoom = action.payload.usZoom
    },
    setIsUsa: (state, action) => {
      state.isUsa = action.payload.isUsa
    }
  },
});

export const { setIsUsa } = usaSlice.actions;

export const selectIsUsa = state => state.usa.isUsa;
export const selectUsCenter = state => state.usa.usCenter;
export const selectUsZoom = state => state.usa.usZoom;

export default usaSlice.reducer;
