import { useState } from 'react';
import BuscadorAux, { BuscadorGeneral } from '../../menus/buscador/buscador';
import ModalData from '../../../../containers/ModalData';
import Iconos from '../../../../components/Icons';
import infoDept from '../../../../data/siigo.json';
import modalConfig from '../../../../config/modalConfig/modalConfig.json';

function formatNumber(number: number) {
    return new Intl.NumberFormat('ES-CO').format(number);
}
const infoModal = modalConfig[0];


const validTypes = ["carrito", "opciones", "finalizar","direcciones","nuevaUbi","transferencia"] as const; 

type ModalType = typeof validTypes[number]; 

interface modalData {
    title: string;
    subtitle:string;
    iconos: string[];
    type: string;
    buscador:boolean;
    doubleHeader:boolean;
    footer:boolean;
}

interface ModalEstructuraOpcProps {
    infoModal: modalData;
    handleClick: (id:string) => void;
    handleHistory: () => void;
    onClose: () => void;
}

export function ModalEstructura(handleClick: (id: string) => void, onClose: () => void) {
    const [mostrarDirecc, setMostrarDirecc] = useState(false);
    const [textoBusqueda, setTextoBusqueda] = useState("");
    const [guardarCiudad, setGuardarCiudad] = useState("");
    const [guardarDepartamento, setGuardarDepartamento] = useState("");
    const [estadoDirecc,setEstadoDirecc] = useState(false);
    const [guardarZona, setGuardarZona] = useState("");
    const [guardarDetalle, setGuardarDetalle] = useState("");
    const [guardarDirecc,setGuardarDirecc] = useState("");
    const [listDirecciones, setListDirecciones] = useState<any[]>([]);

    const listaFiltrada = infoDept.filter(item =>
        item.ciudad.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
        item.departamento.toLowerCase().includes(textoBusqueda.toLowerCase())
    );

    const handleBuscar = (texto: string) => {
        setTextoBusqueda(texto);
        if (texto == "null") {
            setTextoBusqueda("")
        }
    };

    const handleDirecc = () => {
        if(mostrarDirecc === false){
            setMostrarDirecc(true);
        }
        else{
            setMostrarDirecc(false);
        }
    }

    const handleClick2 = (index: any) => {
        const dir = listDirecciones[index];
        setGuardarCiudad(dir.ciudad);
        setGuardarDepartamento(dir.departamento);
        setGuardarDirecc(dir.direccion);
        setGuardarZona(dir.zona);
        setGuardarDetalle(dir.detalle);
    }

    const handleGuardarDirecc = (ciudad:string,departamento:string) => {
        setGuardarCiudad(ciudad);
        setGuardarDepartamento(departamento);
        
        setMostrarDirecc(false);
    }

    const handleGuardarTodo = async () => {
        const asda = listDirecciones.length
        if (listDirecciones.length > 4) { 
            console.error("esto lo hice porque fry me tiene mamado", asda, "te odio");
            alert(`Fry te odio hpta ojala te pise el metro ${asda} veces`);
        } else {
            setListDirecciones([...listDirecciones, { direccion: guardarDirecc, zona: guardarZona, detalle: guardarDetalle, ciudad: guardarCiudad, departamento: guardarDepartamento }]);
            
            console.log("Direcciones guardadas:", listDirecciones);
        }
    }

    

    return {
        carrito: (
            <>
                <div className="modal-header double">
                        <div className="header-text doubleT">
                            <p className="header-title">
                                Carrito
                            </p>
                            <p className="header-subtitle">
                                Productos seleccionados
                            </p>
                        </div>
                        <button className="close-modal" onClick={() => onClose()}>
                                <Iconos icono={"flechaIzq"}/>
                        </button>
                        <div className="header-svg" onClick={() => handleClick("opciones")}>
                            <Iconos icono={"opciones"}/>
                        </div>
                    </div>
                <div className="modal-buscador">
                <BuscadorGeneral infoModal={infoModal.carrito}/>
                
                </div>
                <div className="modal-content">
                    <div className="modal-data-carrito">
                        <ModalData />
                    </div>
                </div>
            </>
        ),
        opciones: (
            <>
                    <div className="modal-header">
                    <div className="header-text">
                        <p className="header-title">
                            Opciones
                        </p>
                    </div>
                    <button className="close-modal" onClick={() => handleClick("carrito")}>
                        <Iconos icono={"flechaIzq"}/>
                    </button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-opciones">
                        <li className="list-opc">
                            <div className="info-list">
                                <Iconos icono={"compartir"} />
                                <p className="opc-text">Compartir</p>
                            </div>
                            <div className="svg-direcc" onClick={() => handleClick("direcciones")}>
                                <Iconos icono={"flechaDer"} />
                            </div>
                        </li>
                        <li className="list-opc">
                            <div className="info-list">
                                <Iconos icono={"imprimir"} />
                                <p className="opc-text">Imprimir</p>
                            </div>
                            <div className="svg-direcc" onClick={() => handleClick("direcciones")}>
                                <Iconos icono={"flechaDer"} />
                            </div>
                        </li>
                        <li className="list-opc">
                            <div className="info-list">
                                <Iconos icono={"download"} />
                                <p className="opc-text">Descargar</p>
                            </div>
                            <div className="svg-direcc" onClick={() => handleClick("direcciones")}>
                                <Iconos icono={"flechaDer"} />
                            </div>
                        </li>
                        <li className="list-opc">
                            <div className="info-list">
                                <Iconos icono={"subir"} />
                                <p className="opc-text">Subir productos desde excel</p>
                            </div>
                            <div className="svg-direcc" onClick={() => handleClick("direcciones")}>
                                <Iconos icono={"flechaDer"} />
                            </div>
                        </li>
                        <li className="list-opc">
                            <div className="info-list">
                                <Iconos icono={"eliminar"} />
                                <p className="opc-text">Eliminar carrito</p>
                            </div>
                            <div className="svg-direcc" onClick={() => handleClick("direcciones")}>
                                <Iconos icono={"flechaDer"} />
                            </div>
                        </li>
                        </ul>
                    </div>
            </>
        ),
        finalizar: (
            <>
                <div className="modal-header">
                    <div className="header-text">
                        <p className="header-title">
                            Finalizar compra
                        </p>
                    </div>
                    <button className="close-modal" onClick={() => handleClick("carrito")}>
                        <Iconos icono={"flechaIzq"}/>
                    </button>
                </div>
                <div className="modal-body">
                    <ul className="list-opciones">
                        <li className="list-opc">
                            <div className="info-list">
                                <Iconos icono={guardarCiudad ? "direccionSave" : "direccion"} />
                                <p className="opc-text">Dirección de entrega</p>
                            </div>
                            <div className="svg-direcc" onClick={() => handleClick("direcciones")}>
                                <Iconos icono={"flechaDer"} />
                            </div>
                        </li>
                        <li className={guardarCiudad ? "list-opc2" : "list-opc"}>
                            <div>
                            <p className={guardarCiudad ? "opc-text-main" :"opc-text"}>{guardarCiudad ? `${guardarCiudad}, ${guardarDepartamento}` : "Seleccionar dirección de entrega"}</p>
                            {guardarDetalle && guardarZona ? <p className="opc-text-submain">{`${guardarDirecc} | ${guardarZona} | ${guardarDetalle}`}</p> : <p className="opc-text-submain">{`${guardarDirecc}`}</p>}
                            </div>

                        </li>
                    </ul>
                    <ul className="list-opciones2">
                        <li className="list-opc2">
                            <div>
                            <p className="opc-text-main">Subtotal</p>
                            <p className="opc-text-submain">${formatNumber(4000 - (4000 * 0.19))}</p>
                            </div>
                        </li>
                        <li className="list-opc2">
                            <div>
                            <p className="opc-text-main">Costo de envío</p>
                            <p className="opc-text-submain">Gratis</p>
                            </div>
                        </li>
                        <li className="list-opc2">
                            <div>
                            <p className="opc-text-main">Saldo a favor</p>
                            <p className="opc-text-submain">${formatNumber(4000)}</p>
                            </div>
                        </li>
                        <li className="list-opc2">
                            <div>
                            <p className="opc-text-main">IVA</p>
                            <p className="opc-text-submain">${formatNumber(4000 * 0.19)}</p>
                            </div>
                            <div className="svg-direcc">
                                <p className="opc-text-opcional">+19%</p>
                            </div>
                        </li>
                        <li className="list-opc2">
                            <div>
                            <p className="opc-text-main">Total a pagar</p>
                            <p className="opc-text-submain">${formatNumber((4000))}</p>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <p className={guardarCiudad ? "opc-text-main" : "opc-text-main hidden"} >
                            Seleccionar medio de pago
                        </p>
                    </div>
                    <ul className={guardarCiudad ? "list-opciones2": "list-opciones2 hidden"}>
                        <li className="list-opc" onClick={() => handleClick("transferencia")}>
                            <div style={{display:"flex",alignItems:"center"}}>
                            <Iconos icono={"transferencia"} />
                            <p className="opc-text">Transferencia</p>
                            </div>
                            <Iconos icono={"flechaDer"} />
                        </li>
                        <li className="list-opc">
                            <div style={{display:"flex",alignItems:"center"}}>
                            <Iconos icono={"credito"} />
                            <p className="opc-text">Crédito 30 días</p>
                            </div>
                            <Iconos icono={"flechaDer"} />

                        </li>
                        <li className="list-opc">
                            <div style={{display:"flex",alignItems:"center"}}>
                            <Iconos icono={"contraentrega"} />
                            <p className="opc-text">Contraentrega</p>
                            </div>
                            <Iconos icono={"flechaDer"} />
                        </li>
                    </ul>
                </div>
            </>
        ),
        direcciones: (
            <>
                <div className="modal-header">
                    <div className="header-text">
                        <p className="header-title">
                            Seleccionar direccion de entrega
                        </p>
                    </div>
                    <button className="close-modal" onClick={() => handleClick("finalizar")}>
                        <Iconos icono={"flechaIzq"}/>
                    </button>
                </div>
                <div className="modal-body">
                    <ul className="list-opciones">
                        <li className="list-opc">
                            <div className="info-list">
                                <Iconos icono={"ubicacion"} />
                                <p className="opc-text">Mi ubicacion actual</p>
                            </div>
                            <div className="svg-direcc" onClick={() => handleClick("ubicacion")}>
                                <Iconos icono={"flechaDer"} />
                            </div>
                        </li>
                        <li className="list-opc">
                            <div className="info-list">
                                <Iconos icono={"puntoVenta"} />
                                <p className="opc-text">Recoger en el punto de venta</p>
                            </div>
                            <div className="svg-direcc" onClick={() => handleClick("recoger")}>
                                <Iconos icono={"flechaDer"} />
                            </div>
                        </li>
                        <li className="list-opc">
                            <div className="info-list">
                                <Iconos icono={"añadirUbi"} />
                                <p className="opc-text">Crear nueva direccion de entrega</p>
                            </div>
                            <div className="svg-direcc" onClick={() => handleClick("nuevaUbi")}>
                                <Iconos icono={"flechaDer"} />
                            </div>
                        </li>
                    </ul>

                    <ul className={guardarCiudad ? "list-opciones" : "list-opciones hidden"} style={{marginTop:"12px"}}>
                        
                            {listDirecciones.map((item, index) => (
                                <li key={index} className="list-opc2">
                                    <div> 

                                    <p className="opc-text-main">
                                        {`${item.ciudad}, ${item.departamento}`}
                                    </p>
                                    {item.zona && item.detalle ? <p className="opc-text-submain">{`${item.direccion} | ${item.zona} | ${item.detalle}`}</p> : <p className="opc-text-submain">{`${item.direccion}`}</p>}

                                    </div>
                                    <div className="svg-direcc" onClick={() => {handleClick2(index); handleClick("finalizar")}}>
                                        <Iconos icono={"flechaDer"} />
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </>

        ),
        nuevaUbi: (
            <>
                <div className="modal-header">
                    <div className="header-text">
                        <p className="header-title">
                            {infoModal.nuevaUbi.title}
                        </p>
                    </div>
                    <button className="close-modal" onClick={() => handleClick("direcciones")}>
                        <Iconos icono={"flechaIzq"}/>
                    </button>
                    </div>
                <div className="modal-body">

                <ul className="list-opciones2">
                        <li className="list-opc2">
                            <div>
                                <p className="opc-text-main">Pais</p>
                                <p className="opc-text-submain">Colombia</p>
                            </div>
                        </li>
                        <li className="list-opc3">
                            <div>
                                <p className="opc-text-main">Ciudad</p>
                                <p className="opc-text-submain" onClick={handleDirecc} style={{cursor:"pointer"}}>{guardarCiudad && guardarDepartamento ? `${guardarCiudad} ${guardarDepartamento}` : "Selecciona tu ciudad"}</p>
                            </div>
                        </li>
                        <li className="list-opc3">
                            <div>
                                <p className="opc-text-main">Zona || Barrio</p>
                                <input 
                                type="text" 
                                className="input-zona" 
                                onChange={(e) => setGuardarZona(e.target.value)}
                                />
                            </div>
                            <div className="svg-direcc">
                                <p className="opc-text-opcional">Opcional</p>
                            </div>
                        </li>
                        <li className="list-opc3">
                            <div>
                                <p className="opc-text-main">Detalles</p>
                                <input 
                                type="text" 
                                className="input-detalles" 
                                onChange={(e) => setGuardarDetalle(e.target.value)}
                                />
                            </div>
                            <div className="svg-direcc">
                                <p className="opc-text-opcional">Opcional</p>
                            </div>
                        </li>
                        <li className="list-opc3">
                            <div>
                                <p className="opc-text-main">Direccion</p>
                                <input 
                                type="text" 
                                className="input-detalles" 
                                onChange={(e) => {
                                    setGuardarDirecc(e.target.value);
                                    setEstadoDirecc(true);
                                }}
                                />
                            </div>
                        </li>
                    </ul>

                        <div className={mostrarDirecc? "modal-buscador estatico ciudades" : "cmodal-buscador estatico hidden"}>
                    <BuscadorAux 
                    onBuscar={handleBuscar} 
                    iconos={["lupa", "filtro"]} 
                    />
                        <div className={mostrarDirecc ? "ciudades" : "ciudades hidden"}>
                            <ul className="list-opciones ciudad">
                                
                                <div className="listado-ciudades">
                                {listaFiltrada.map((item, index) => (
                                <li key={index} className="list-opc4">
                                    <div className="opc-text-main">{item.ciudad} || {item.departamento}</div>
                                    <div className="svg-direcc" onClick={() => handleGuardarDirecc(item.ciudad,item.departamento)}>
                                    <Iconos icono={"flechaDer"} />
                                    </div>
                                </li>
                                ))}
                                </div>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={estadoDirecc && guardarCiudad ? "modal-footer-direc" : "modal-footer-direc hidden"} style={{placeContent:"center"}}>
                    <div className="button">
                        <button className="guardar-direc" onClick={() => {handleClick("finalizar");  handleGuardarTodo(); setEstadoDirecc(false);}}>
                            Guardar Direccion 
                        </button>
                    </div>
                </div>
            </>
        ),
        transferencia: (
            <>
                <div className="modal-header double">
                    <div className="header-text doubleT">
                        <p className="header-title">
                            {infoModal.transferencia.title}
                        </p>
                        <p className="header-subtitle">
                            {infoModal.transferencia.subtitle}
                        </p>
                    </div>
                    <button className="close-modal" onClick={() => onClose()}>
                            <Iconos icono={"flechaIzq"}/>
                    </button>
                    <div className="header-svg" onClick={() => handleClick("opciones")}>
                        <Iconos icono={"opciones"}/>
                    </div>
                </div>
                <div className="modal-body">
                    <ul className="list-opciones">
                        <li className="list-opc2">
                            <div>
                                <p className="opc-text-main">
                                    Total a pagar
                                </p>
                                <p className="opc-text-subtitle" style={{fontSize:"14px"}}>
                                    {formatNumber(4000)}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </>
        )
    };
}

export function ModalEstructuraOpc({ infoModal, handleClick,onClose }: ModalEstructuraOpcProps) {
    const type = infoModal.type as ModalType;
    const menus = ModalEstructura(handleClick,onClose); 
    console.log(type);
    if (!validTypes.includes(type as ModalType)) {
        console.error("Tipo de modal no válido");
        return null; 
    }

    return (
        <>
            <div>
                {menus[type as ModalType]}
            </div>
        </>
    );
}

