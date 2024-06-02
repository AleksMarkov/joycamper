import { configureStore } from '@reduxjs/toolkit';
import interestsReducer from '../redux/cards/interestsSlice';

const store = configureStore({
  reducer: {
    interests: interestsReducer,
  },
});

export default store;
