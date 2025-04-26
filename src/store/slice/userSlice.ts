import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface User {
    archivos:string[];
    credito:string[];
    direcciones_alternativas:string[];
    email:string;
    email_empresa:string;
    empresa:string[];
    estado:string;
    estadoConexion:string;
    favoritos:string[];
    fecha:string;
    foto:string;
    id_empresa:string;
    id_usuario:string;
    id_bodega:string;
    id_vendedor:string;
    nivel:string[];
    password:string;
    perfil:string;
    permisos:string[];
    saldoFavor:string[];
    tipo_cliente:string;
    ultimo_acceso:string;
    ultimo_pago:string;
    usuario:string[];
    vendedor:string[];  
}

interface UserState {
    usuarios: User[];
}

const initialState: UserState = {
    usuarios: []
}

const userSlice = createSlice({
    name: 'usuarios',
    initialState,
    reducers: {
        cargarUsuarios(state, action: PayloadAction<User[]>) {
            console.log('👤 Usuarios cargados en Redux:', action.payload);
            state.usuarios = action.payload;
        }
    }
});

export const {cargarUsuarios} = userSlice.actions;
export default userSlice.reducer;