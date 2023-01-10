
//RTK
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Libs
import getPizza from "../libs/getPizza";

const initialState = {
    pizzaList: [],
    pizzaSingle: {},
    status: "loading",
}

export const pizzaFetchingAll = createAsyncThunk(
    "pizza/fetchPizzaAll",
    (url) => {
        return getPizza(url);
    }
)

const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(pizzaFetchingAll.pending, state => {
                state.status = "loading";
            })
            .addCase(pizzaFetchingAll.fulfilled, (state, action) => {
                state.status = "loaded";
                state.pizzaList = action.payload;
            })
            .addCase(pizzaFetchingAll.rejected, state => {
                state.status = "error";
            })
            .addDefaultCase(()=> {})
    }
})

export default pizzaSlice.reducer;




