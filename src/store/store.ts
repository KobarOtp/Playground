import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import shoppingCartSlice from "./slice/shoppingCart";
import userSlice from "./slice/userSlice";
import searchSlice from "./slice/searchSlice";

export const store = configureStore({
    reducer:{
        product: productSlice,
        shoppingCart: shoppingCartSlice,
        user: userSlice,
        search: searchSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;   