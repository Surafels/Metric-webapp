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
    const respone = await fetch(url);
    const data = respone.json();
    return data;
})
const companiesDetails = createAsyncThunk('companies/copmpaniesDetails', async()=>{
    const respone = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`);
    const data= respone.json();
    return data;
})

const companiesSlice = createSlice({
name:'companies',
initialState,
reducer :{},
extraReducers:(builder)=>{
    builder.addCase(companiesData.fulfilled,(state,action)=>{
        state.companies= action.payload;
        state.isLoading=false;
    })
    builder.addCase(companiesData.pending,(state,action)=>{
        state.isLoading=true;
        state.error= action.error.message;
    })
    builder.addCase(companiesData.rejected,(state,action)=>{
        state.isLoading=false;
        state.error= action.error.message;
    })
    builder.addCase(companiesDetails.fulfilled,(state,action)=>{
        state.companies= action.payload;
        state.isLoading=false;
    })
    builder.addCase(companiesDetails.pending,(state,action)=>{
        state.isLoading=true;
        state.error= action.error.message;
    })
    builder.addCase(companiesDetails.rejected,(state,action)=>{
        state.isLoading=false;
        state.error= action.error.message;
    })
}
})
