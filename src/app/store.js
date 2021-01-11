import { configureStore } from '@reduxjs/toolkit';
import casesTypeReducer from '../features/casesTypeSlice';

export default configureStore({
  reducer: {
    casesType: casesTypeReducer,
  },
});
