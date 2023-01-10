
//RTK
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Libs
import getPizza from "../libs/getPizza";

const initialState = {
    pizzaSingle: {},
    status: "loading",
}

export const pizzaFetchingSingle = createAsyncThunk(
    "pizza/fetchPizzaSingle",
    (url) => {
        return getPizza(url);
    }
)

const pizzaSingleSlice = createSlice({
    name: "pizzaSingle",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(pizzaFetchingSingle.pending, state => {
                state.status = "loading";
            })
            .addCase(pizzaFetchingSingle.fulfilled, (state, action) => {
                state.status = "loaded";
                state.pizzaSingle = action.payload;
            })
            .addCase(pizzaFetchingSingle.rejected, state => {
                state.status = "error";
            })
            .addDefaultCase(()=> {})
    }
})

export default pizzaSingleSlice.reducer;




