import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        deleteItem: (state) => {
            state.items.pop()
        },
        clearItems: (state) => {
            state.items.length = 0;
        }
    }
})

export default cartSlice.reducer;
export const {addItem, deleteItem, clearItems} = cartSlice.actions;