import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const apiKey = '66bccab5c51dff5ab45457f9fa2d1bea';
const url = `https://financialmodelingprep.com/api/v3/search?query=AA&apikey=${apiKey}`;

const initialState = {
  companies: [],
  companyDetails: [],
  isLoading: false,
  error: false,
};

const companiesData = createAsyncThunk('companies/companiesData', async()=>{
    
})