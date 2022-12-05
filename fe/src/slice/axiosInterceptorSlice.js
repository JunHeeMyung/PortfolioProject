import { createSlice } from "@reduxjs/toolkit";

const axiosInterceptorSlice = createSlice({
    name: 'axiosInterceptor',
    initialState: { value: 0 },
    reducers: {
        setIntercepted: (state, action) => { state.value = action.payload;}
    }
});

export default axiosInterceptorSlice;
export const {setIntercepted} = axiosInterceptorSlice.actions;