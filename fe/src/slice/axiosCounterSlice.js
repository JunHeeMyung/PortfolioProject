import { createSlice } from "@reduxjs/toolkit";

const axiosCounterSlice = createSlice({
    name: 'axiosCounter',
    initialState: { value: 0 },
    reducers: {
        plus: (state, action) => { state.value += action.payload; },
        minus: (state, action) => { state.value -= action.payload; }
    }
});

export default axiosCounterSlice;
export const {plus,minus} = axiosCounterSlice.actions;


