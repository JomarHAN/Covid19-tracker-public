import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    worldLatLng: [50, 0],
    worldZoom: 1.7,

  },
  reducers: {
    setWorldView: (state, action) => {
      if (action.payload.isGlobe) {
        state.worldLatLng = [50, 0]
        state.worldZoom = 1.7
      } else {
        state.worldLatLng = action.payload.worldLatLng
        state.worldZoom = action.payload.worldZoom
      }
    }
  },
});

export const { setWorldView } = countriesSlice.actions;

export const selectWorldLatLng = state => state.countries.worldLatLng;
export const selectWorldZoom = state => state.countries.worldZoom;

export default countriesSlice.reducer;
