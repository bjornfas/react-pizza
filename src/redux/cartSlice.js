
//RTK
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pizza: [],
    totalPrice: 0,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPizza: (state, action) => {
            
            const findPizza = state.pizza.find(item => {
                return ((item.id === action.payload.id) && (item.type === action.payload.type) && (item.size === action.payload.size));
            });

            if (findPizza) {
                findPizza.count++;
            } else {
                state.pizza.push({
                    ...action.payload,
                    count: 1
                });
            }

            const count = action.payload.count === 0 ? 1 :  action.payload.count;
            
            state.totalPrice += (action.payload.price * count);
        },
        minusPizza: (state, action) => {
            const pizzaFinded = state.pizza.find(item => (item.id === action.payload.id) && (item.type === action.payload.type) && (item.size === action.payload.size));
            pizzaFinded.count--;
            state.totalPrice -= pizzaFinded.price;
        },
        plusPizza: (state, action) => {
            const pizzaFinded = state.pizza.find(item => (item.id === action.payload.id) && (item.type === action.payload.type) && (item.size === action.payload.size));
            pizzaFinded.count++;
            state.totalPrice += pizzaFinded.price;
        },
        removePizza: (state, action) => {
            const pizzaFinded = state.pizza.find(item => (item.id === action.payload.id) && (item.type === action.payload.type) && (item.size === action.payload.size));
            state.pizza = state.pizza.filter(item => item !== pizzaFinded);
            state.totalPrice -= pizzaFinded.price * pizzaFinded.count;
        },
        clearPizza: (state) => {
            state.pizza = [];
            state.totalPrice = 0;
        }

    },
})

export default cartSlice.reducer;

export const { addPizza, minusPizza, plusPizza, removePizza, clearPizza } = cartSlice.actions;




