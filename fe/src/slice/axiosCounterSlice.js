import { createSlice } from "@reduxjs/toolkit";

const axiosCounterSlice = createSlice({
    name: 'axiosCounter',
    initialState: { value: 0 },
    reducers: {
        add: (state, action) => { state.value += action.payload; }
    }
});

export default axiosCounterSlice;
export const {add} = axiosCounterSlice.actions;