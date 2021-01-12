import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    worldLatLng: [50, 0],
    worldZoom: 1.7,
    countryCovid: "Worldwide",
    countryHover: "Worldwide"
  },
  reducers: {
    setCountryHover: (state, action) => {
      state.countryHover = action.payload.countryHover
    },

    setWorldView: (state, action) => {
      if (action.payload.isGlobal) {
        state.worldLatLng = [50, 0]
        state.worldZoom = 1.7
      } else {
        state.worldLatLng = action.payload.worldLatLng
        state.worldZoom = action.payload.worldZoom
      }
    },

    setCountryCovid: (state, action) => {
      state.countryCovid = action.payload.countryCovid
    }
  },
});

export const { setWorldView, setCountryCovid, setCountryHover } = countriesSlice.actions;

export const selectWorldLatLng = state => state.countries.worldLatLng;
export const selectWorldZoom = state => state.countries.worldZoom;
export const selectCountryCovid = state => state.countries.countryCovid;
export const selectCountryHover = state => state.countries.countryHover;

export default countriesSlice.reducer;
