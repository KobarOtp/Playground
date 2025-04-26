import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Producto {
    categoria: string;
    codigo: string;
    datos_producto: string[];
    estado: string[];
    estado_promocion: string[];
    fecha: string;
    id: Int8Array;
    id_categoria: string;
    id_marca: string;
    id_modelo: string;
    imagen: string;
    imagenArray: string;
    marca: string;
    modelo: string;
    precios: string;
    precios_promocion: string[];
    aplicaciones: string[];
    descripcion: string;
    pickingTemporal: string;
    proveedores: string[];
    stock_max: Int8Array;
    stock_min: Int8Array;
    stock_reconteo: string;
    ubicacion: string[];
    ubicacion_reconteo: string;
}

interface ProductState {
    productos: Producto[];
}

const initialState: ProductState = {
    productos: []
};

const productSlice = createSlice({
    name: 'productos',
    initialState,
    reducers: {
        cargarProductos(state, action: PayloadAction<Producto[]>) {
            console.log('Productos cargados en Redux:', action.payload);
            state.productos = action.payload;
        }
    }
});

export const { cargarProductos } = productSlice.actions;
export default productSlice.reducer;