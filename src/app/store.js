import { configureStore } from '@reduxjs/toolkit';
import casesTypeReducer from '../features/casesTypeSlice';
import usaReducer from '../features/usaSlice';

export default configureStore({
  reducer: {
    casesType: casesTypeReducer,
    usa: usaReducer,

  },
});
