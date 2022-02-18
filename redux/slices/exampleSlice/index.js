import { createSlice } from "@reduxjs/toolkit";

const initialState = { phrase: "Hello world", token: null };

const exampleSlice = createSlice({
    name: "example",
    initialState,
    reducers: {
        setTest: (state, action) => {
            state.test = action.payload.data;
        }
    }
});

export const { setTest } = exampleSlice.actions;
export const exampleReducer = exampleSlice.reducer;