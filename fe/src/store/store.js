import { configureStore } from "@reduxjs/toolkit";
import axiosCounterSlice from 'slice/axiosCounterSlice'
import axiosInterceptorSlice from "slice/axiosInterceptorSlice";

const store = configureStore({
    reducer:{
        axiosCounter:axiosCounterSlice.reducer,
        axiosInterceptor:axiosInterceptorSlice.reducer
    }
})

export default store;