import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter';
import loggedReducer from '../reducers/isLogged';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    isLogged: loggedReducer,
  },
});


export default store;
