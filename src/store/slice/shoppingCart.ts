import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingCartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string[];
    category: string;
    stock: number;
    model: string;
    brand: string[];
    sales: string[];
    ubication: string[];
    discount: number;
    brandName: string;
    new: boolean;
    code: string;
}

interface ShoppingCartState {
    shoppingCart: ShoppingCartItem[];
}

const initialState: ShoppingCartState = {
    shoppingCart: []
}

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        agregarCarrito(state, action: PayloadAction<ShoppingCartItem>) {
            state.shoppingCart.push(action.payload);
        },
        eliminarCarrito(state, action: PayloadAction<number>) {
            state.shoppingCart = state.shoppingCart.filter(producto => producto.id !== action.payload)
        },
        vaciarCarrito(state) {
            state.shoppingCart = []
        }
    }
})

export const {
    agregarCarrito,
    eliminarCarrito,
    vaciarCarrito }
    = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;