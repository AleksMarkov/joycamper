import { configureStore } from '@reduxjs/toolkit';
import interestsReducer from '../redux/cards/interestsSlice';
import advertsReducer from '../redux/adverts/advertsSlice';

const store = configureStore({
  reducer: {
    interests: interestsReducer,
    adverts: advertsReducer,
  },
});

export default store;
