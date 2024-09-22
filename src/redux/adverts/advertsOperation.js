// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getAllAdverts } from '../../api/adverts';

// export const fetchAllAdverts = createAsyncThunk(
//   'adverts/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await getAllAdverts();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCampers } from '../../api/adverts'; // Измените на getAllCampers

export const fetchAllAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllCampers(); // Измените вызов функции на getAllCampers
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);