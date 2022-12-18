import { configureStore } from "@reduxjs/toolkit";
import axiosCounterSlice from 'slice/axiosCounterSlice'

const store = configureStore({
    reducer:{
        axiosCounter:axiosCounterSlice.reducer,
    }
})

export default store;