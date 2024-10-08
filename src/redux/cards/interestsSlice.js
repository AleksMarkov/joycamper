//interestsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  interestingCards: JSON.parse(localStorage.getItem('interestingCards')) || [],
  filteredCards: [],
  loading: false,
};

const interestsSlice = createSlice({
  name: 'interests',
  initialState,
  reducers: {
    addInterest: (state, action) => {
      state.interestingCards.push(action.payload);
      localStorage.setItem(
        'interestingCards',
        JSON.stringify(state.interestingCards)
      );
    },
    removeInterest: (state, action) => {
      state.interestingCards = state.interestingCards.filter(
        card => card.id !== action.payload.id
      );
      localStorage.setItem(
        'interestingCards',
        JSON.stringify(state.interestingCards)
      );
    },
    filterInterests: (state, action) => {
      state.loading = true;
      state.filteredCards = state.interestingCards.filter(card => {
        return (
          (!action.payload.acSelected || card.AC) &&
          (!action.payload.automaticSelected ||
            card.transmission.toLowerCase() === 'automatic') &&
          (!action.payload.kitchenSelected || card.kitchen) &&
          (!action.payload.tvSelected || card.TV) &&
          (!action.payload.showerSelected || card.bathroom) &&
          (!action.payload.vanSelected || card.form === 'panelTruck') &&
          (!action.payload.fullSelected || card.form === 'fullyIntegrated') &&
          (!action.payload.alcoveSelected || card.form === 'alcove') &&
          (!action.payload.location ||
            card.location
              .toLowerCase()
              .includes(action.payload.location.toLowerCase()))
        );
      });
      state.loading = false;
    },
  },
});

export const { addInterest, removeInterest, filterInterests } =
  interestsSlice.actions;

export default interestsSlice.reducer;
