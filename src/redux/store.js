
//RTK
import { configureStore } from "@reduxjs/toolkit";
import pizza from "../redux/pizzaSlice";
import pizzaSingle from "../redux/pizzaSingleSlice";
import filter from "../redux/filterSlice";
import cart from "../redux/cartSlice";

const store = configureStore({
    reducer: {
        pizza,
        pizzaSingle,
        filter,
        cart
    },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;