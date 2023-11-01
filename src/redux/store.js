import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './company/CompaniesSlice';

const store = configureStore ({
    reducer:{
       companies:companiesReducer, 
    }
})

export default store;