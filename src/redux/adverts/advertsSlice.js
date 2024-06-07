import { createSlice } from '@reduxjs/toolkit';
import { fetchAllAdverts } from './advertsOperation';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllAdverts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchAllAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default advertsSlice.reducer;
