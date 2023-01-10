
//RTK
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: 0,
    sort: "rating",
    search: ""
}


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterSearch: (state, action) => {
            state.search = action.payload;
        },
        filterTabs: (state, action) => {
            state.category = action.payload;
        },
        filterSort: (state, action) => {
            state.sort = action.payload;
        }
    }
})

export default filterSlice.reducer;

export const {filterSearch, filterTabs, filterSort} = filterSlice.actions;


