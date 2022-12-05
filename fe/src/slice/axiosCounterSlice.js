import { createSlice } from "@reduxjs/toolkit";

const axiosCounterSlice = createSlice({
    name: 'axiosCounter',
    initialState: { value: 0 },
    reducers: {
        plus: (state, action) => { state.value += action.payload; console.log(state.value)},
        minus: (state, action) => { state.value -= action.payload; console.log(state.value)}
    }
});

export default axiosCounterSlice;
export const {plus,minus} = axiosCounterSlice.actions;


