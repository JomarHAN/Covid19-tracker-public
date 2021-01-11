import { configureStore } from '@reduxjs/toolkit';
import casesTypeReducer from '../features/casesTypeSlice';
import usaReducer from '../features/usaSlice';
import countriesReducer from '../features/countriesSlice';

export default configureStore({
  reducer: {
    casesType: casesTypeReducer,
    usa: usaReducer,
    countries: countriesReducer
  },
});
