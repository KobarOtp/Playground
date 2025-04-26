import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Busqueda {
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

interface BusquedaState {
    busquedas: Busqueda[];
}

const initialState: BusquedaState = {
    busquedas: []
}

const busquedaSlice = createSlice({
    name: 'busquedas',
    initialState,
    reducers: {
        cargarBusquedas(state, action: PayloadAction<Busqueda[]>) {
            // console.log(' Busquedas cargadas en Redux:', action.payload);
            state.busquedas = action.payload;
        },
        vaciarBusquedas(state) {
            // console.log(' Busquedas vaciadas en Redux:', state.busquedas);
            state.busquedas = [];
        }
    }
})

export const { cargarBusquedas, vaciarBusquedas } = busquedaSlice.actions;
export default busquedaSlice.reducer;