/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [],
  companyDetails: [],
  isLoading: false,
  error: false,
};

export const companiesData = createAsyncThunk('companies/fetchData', async () => {
  const response = await fetch('https://financialmodelingprep.com/api/v3/search?query=AA&apikey=9Y8b0nOYThbsqHxroAFTOORYDD7lyGJV');
  const data = await response.json();
  return data;
});

export const companiesDetails = createAsyncThunk('companyDetails/fetchData', async () => {
  const response = await fetch('https://financialmodelingprep.com/api/v3/search?query=AA&apikey=9Y8b0nOYThbsqHxroAFTOORYDD7lyGJV');
  const data = await response.json();
  return data;
});

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(companiesData.fulfilled, (state, action) => {
      state.companies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(companiesData.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(companiesData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(companiesDetails.fulfilled, (state, action) => {
      state.companyDetails = action.payload;
      state.isLoading = false;
    });
    builder.addCase(companiesDetails.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(companiesDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default companiesSlice.reducer;
