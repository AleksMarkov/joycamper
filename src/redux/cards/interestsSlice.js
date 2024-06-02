import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  interestingCards: JSON.parse(localStorage.getItem('interestingCards')) || [],
};

const interestsSlice = createSlice({
  name: 'interests',
  initialState,
  reducers: {
    addInterest: (state, action) => {
      state.interestingCards.push(action.payload);
      localStorage.setItem('interestingCards', JSON.stringify(state.interestingCards));
    },
    removeInterest: (state, action) => {
      state.interestingCards = state.interestingCards.filter(card => card.id !== action.payload.id);
      localStorage.setItem('interestingCards', JSON.stringify(state.interestingCards));
    },
  },
});

export const { addInterest, removeInterest } = interestsSlice.actions;

export default interestsSlice.reducer;
