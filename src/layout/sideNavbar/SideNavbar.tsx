import './menu.css';
import HeaderTienda from './headers/headerLateral';
import BodyTienda from './bodys/bodyLateral';
import FooterTienda from './footers/footerLateral';
import Cookies from 'js-cookie';
import { getDataCliente, getDataProductos } from '../functions/apiLogin';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { cargarProductos } from '../../features/product/productSlice';
import { cargarUsuarios } from '../../features/user/userSlice';


export default function SideNavbar({ email, password }: { email: string, password: string }) {

  const [infoCliente, setInfoCliente] = useState({
    adicional: '',
    barrio: '',
    cedula: '',
    celular: '',
    ciudad: '',
    departamento: '',
    direccion: '',
    fecha: '',
    genero: '',
    nombre: '',
    pais: '',
    telefono: '',
    token: ''
  });

  const dispatch = useDispatch<AppDispatch>();
  const [dataProductos, setDataProductos] = useState<any>([
  ]);


  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get('token');
      if (!token) return;

      try {
        const clienteData = await getDataCliente(token, email, password);
        setInfoCliente(clienteData[0].usuario);
        dispatch(cargarUsuarios(clienteData))
        const id_bodega = clienteData?.[0]?.id_bodega;
        const id_empresa = clienteData?.[0]?.id_empresa;

        const productosData = await getDataProductos(token, email, password, id_bodega, id_empresa);

        if (Array.isArray(productosData?.lista)) {
          dispatch(cargarProductos(productosData.lista));
        } else {
          console.log('❌ productosData.lista no es un array');
        }
      } catch (err) {
        console.error('🔥 Error en fetchData:', err);
      }
    };

    fetchData();
  }, [dispatch]);



  useEffect(() => {
    console.log('📊 Cambios en productos:', dataProductos);
  }, [dataProductos]);


  return (
    <>
      <div className="menu">
        <div className="menu-header">
          <HeaderTienda />
        </div>
        <div className="border"></div>
        <div className="menu-tienda-body">
          <BodyTienda />
        </div>

        <div className="menu-tienda-footer">
          <FooterTienda infoCliente={infoCliente} />
        </div>
      </div>
    </>
  );
}