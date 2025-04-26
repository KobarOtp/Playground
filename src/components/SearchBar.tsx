// BuscadorAux.tsx
import {  useState } from "react";
import Iconos from '../components/Icons';
import { getDataBusqueda } from "../../functions/apiLogin";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cargarBusquedas,vaciarBusquedas } from "../../../features/busqueda/busquedaSlice";
import { AppDispatch } from "../../store";



interface BuscadorAuxProps {
  
  onBuscar: (texto: string) => void;
  iconos: string[];
}

interface BuscadorGeneral {
  title: string;
  subtitle: string;
  iconos: string[];
  type:string;

}

export default function BuscadorAux({ onBuscar, iconos }: BuscadorAuxProps) {
  const [texto, setTexto] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTexto(value);
    onBuscar(value);
  };

  return (
    <div className="buscador modal-buscador">
      {/* <Iconos icono={iconos[0] || "none"} /> */}
      <input
        name="buscadorsito"
        type="text"
        placeholder="Buscar"
        value={texto}
        onChange={handleChange}
      />
      {/* <Iconos icono={iconos[1] || "none"} /> */}
    </div>
  );
}

export function BuscadorGeneral({infoModal}: { infoModal: BuscadorGeneral}) {
  const [texto, setTexto] = useState("");
  const listUsuarios = useSelector((state: any) => state.user.usuarios);
  const user = listUsuarios[0];
  
  const dispatch = useDispatch<AppDispatch>();
  const [busquedaProductos,setBusquedaProductos] = useState<any>([]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setTexto(value);
  //   // onBuscar(value);
  // };

  const token = Cookies.get("token");
  
  
  const handleBuscar = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Texto buscado:", texto);
      if (!token) {
        console.log("Token is undefined");
        return;
      }
  
      const data = await getDataBusqueda(token, user.id_bodega, user.id_empresa, texto, "0", "0", "vacio");
      const productosFiltrados = data.lista == undefined ? [] : data.lista;

      if (texto === "") {
        console.log("No se ha ingresado texto para buscar.");
        // dispatch(cargarBusquedas([]));
        setBusquedaProductos([]);
        dispatch(vaciarBusquedas());
        return;
      } else {
        setBusquedaProductos(productosFiltrados);
        dispatch(cargarBusquedas(productosFiltrados));
      }
      
  
      console.log(" Productos filtrados y despachados:", productosFiltrados);
    } catch (error) {
      console.log("Error en la búsqueda:", error);
    }
    
  };
  


  
  

  
  
  return (

    <div className={`buscador`}>
      <Iconos icono={Object.values(infoModal.iconos)[0] || "none"} />
      <form onSubmit={handleBuscar}>
        <input
        type="text"
        name="buscador"
        placeholder="Buscar"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}  
        />
      </form>
      <Iconos icono={Object.values(infoModal.iconos)[1] || "none"} />
    </div>
  );

}