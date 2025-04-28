import React, { useState } from "react";
import { ChevronDown, ChevronLeft, Search } from "lucide-react";
import Iconos from "./components/Icons"; // Componente personalizado para mostrar iconos
import BancolombiaLogo from "../src/assets/bancolombia.jpeg"; // Logo de Bancolombia
import DaviviendaLogo from "../src/assets/davivienda.jpeg"; // Logo de Davivienda
import NequiLogo from "../src/assets/nequi.jpeg"; // Logo de Nequi
import DaviplataLogo from "../src/assets/daviplata.jpeg"; // Logo de Daviplata
import { CheckCircle } from "lucide-react"; // Icono de check

// --- INTERFACES ---

/**
 * @interface MetodoPago
 * Define la estructura de un método de pago disponible.
 */
interface MetodoPago {
  id: number; // Identificador único del método de pago
  name: string; // Nombre descriptivo del método de pago (ej: "Efectivo", "Bancolombia")
  type: "cash" | "credit" | "bank" | "coupon" | "wallet"; // Categoría del método de pago
  amountAvailable?: number; // Monto disponible (opcional, para créditos, saldos, cupones)
  details?: string; // Detalles adicionales (ej: número de cuenta, tipo de cuenta)
  icon?: React.ReactNode; // Componente de icono (opcional)
  image?: string; // Ruta de la imagen/logo (opcional)
}

/**
 * @interface PagoAplicado
 * Define la estructura de un pago que ya ha sido aplicado o agregado a la transacción.
 */
interface PagoAplicado {
  method: MetodoPago; // El método de pago utilizado
  amount: number; // El monto aplicado con este método
}

// --- DATOS CONSTANTES ---

/**
 * @const metodosDePagoDisponibles
 * Lista de todos los métodos de pago que el usuario puede seleccionar.
 */
const metodosDePagoDisponibles: MetodoPago[] = [
  {
    id: 1,
    name: "Efectivo",
    type: "cash",
    icon: <Iconos icono="billete" />,
  },
  {
    id: 2,
    name: "Crédito 30 días",
    type: "credit",
    amountAvailable: 1200000,
    icon: <Iconos icono="credito" />,
  },
  {
    id: 3,
    name: "Contra entrega",
    type: "cash",
    icon: <Iconos icono="contraentrega" />,
  },
  {
    id: 4,
    name: "Saldo a favor",
    type: "wallet",
    amountAvailable: 200000,
    icon: <Iconos icono="monedas" />,
  },
  {
    id: 5,
    name: "Cupones",
    type: "coupon",
    amountAvailable: 120000,
    icon: <Iconos icono="promocion" />,
  },
  {
    id: 6,
    name: "Bancolombia",
    type: "bank",
    details: "Ahorros | 72673284793",
    image: BancolombiaLogo,
  },
  {
    id: 7,
    name: "Davivienda",
    type: "bank",
    details: "Corriente | 546534834",
    image: DaviviendaLogo,
  },
  {
    id: 8,
    name: "Nequi",
    type: "wallet",
    details: "Mobil | 32123338660",
    image: NequiLogo,
  },
  {
    id: 9,
    name: "Daviplata",
    type: "wallet",
    details: "Ahorros | 569652846",
    image: DaviplataLogo,
  },
];

// --- COMPONENTE PRINCIPAL ---

/**
 * @component PantallaPagos
 * Componente funcional de React que representa la pantalla principal para realizar pagos,
 * permitiendo seleccionar uno o varios métodos de pago y aplicar montos hasta cubrir el total.
 */
export const PaymentScreen: React.FC = () => {
  // --- ESTADOS DEL COMPONENTE ---

  // Estado para controlar si el selector de métodos de pago está desplegado o no.
  const [estaDesplegado, setEstaDesplegado] = useState(false);
  // Estado para almacenar el texto ingresado en el campo de búsqueda de métodos de pago.
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  // Estado que almacena el monto total que se debe pagar (inicializado como constante).
  const [montoTotalAPagar] = useState(3900000);
  // Estado para guardar la lista de pagos que ya han sido aplicados por el usuario.
  const [pagosAplicados, setPagosAplicados] = useState<PagoAplicado[]>([]);
  // Estado para almacenar el monto que el usuario está ingresando para el método de pago actualmente seleccionado.
  const [montoActualParaAgregar, setMontoActualParaAgregar] = useState(0);
  // Estado para guardar el método de pago que el usuario ha seleccionado de la lista, antes de ingresar el monto.
  const [metodoSeleccionado, setMetodoSeleccionado] =
    useState<MetodoPago | null>(null);

  // --- CÁLCULOS DERIVADOS ---

  // Calcula el monto total que ya ha sido pagado sumando los montos de todos los pagos aplicados.
  const montoTotalPagado = pagosAplicados.reduce(
    (suma, pago) => suma + pago.amount,
    0
  );
  // Calcula el monto que aún falta por pagar.
  const montoRestante = montoTotalAPagar - montoTotalPagado;

  // Filtra la lista de métodos de pago disponibles basándose en el término de búsqueda ingresado.
  const metodosFiltrados = metodosDePagoDisponibles.filter((metodo) =>
    metodo.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  // --- MANEJADORES DE EVENTOS (FUNCIONES) ---

  /**
   * @function manejarSeleccionMetodo
   * Se ejecuta cuando el usuario selecciona un método de pago de la lista desplegable.
   * Actualiza el estado `metodoSeleccionado`, cierra el desplegable, limpia la búsqueda
   * y establece un monto inicial en `montoActualParaAgregar` (el mínimo entre el disponible/restante).
   * @param {MetodoPago} metodo - El método de pago que fue seleccionado.
   */
  const manejarSeleccionMetodo = (metodo: MetodoPago) => {
    setMetodoSeleccionado(metodo); // Guarda el método seleccionado
    setEstaDesplegado(false); // Cierra el desplegable
    setTerminoBusqueda(""); // Limpia el campo de búsqueda

    // Determina el monto predeterminado para el input
    if (metodo.amountAvailable !== undefined) {
      // Si el método tiene monto disponible, usa el mínimo entre ese monto y lo que falta por pagar
      setMontoActualParaAgregar(
        Math.min(metodo.amountAvailable, montoRestante)
      );
    } else {
      // Si no tiene monto disponible (ej: efectivo), usa el monto restante como máximo posible
      setMontoActualParaAgregar(Math.min(montoRestante, montoRestante)); // Equivalente a setMontoActualParaAgregar(montoRestante)
    }
  };

  /**
   * @function manejarAgregarPago
   * Se ejecuta cuando el usuario confirma agregar el pago con el método seleccionado y el monto ingresado.
   * Añade el nuevo pago a la lista `pagosAplicados` y resetea los estados `metodoSeleccionado` y `montoActualParaAgregar`.
   * Solo agrega el pago si hay un método seleccionado y el monto es mayor a cero.
   */
  const manejarAgregarPago = () => {
    // Validaciones: debe haber un método seleccionado y un monto > 0
    if (!metodoSeleccionado || montoActualParaAgregar <= 0) return;

    // Agrega el nuevo pago a la lista existente
    setPagosAplicados([
      ...pagosAplicados, // Mantiene los pagos anteriores
      {
        method: metodoSeleccionado, // El método que se usó
        amount: montoActualParaAgregar, // El monto que se ingresó
      },
    ]);

    // Resetea la selección para permitir agregar otro método
    setMetodoSeleccionado(null);
    setMontoActualParaAgregar(0);
  };

  /**
   * @function manejarPagarCompleto
   * Se ejecuta cuando el usuario hace clic en el botón "Completo".
   * Agrega un pago utilizando el método seleccionado por el total del monto restante.
   * Resetea los estados `metodoSeleccionado` y `montoActualParaAgregar`.
   */
  const manejarPagarCompleto = () => {
    // Validación: debe haber un método seleccionado
    if (!metodoSeleccionado) return;

    // Agrega el pago por el monto total restante
    setPagosAplicados([
      ...pagosAplicados,
      {
        method: metodoSeleccionado,
        amount: montoRestante, // Usa el monto restante calculado
      },
    ]);

    // Resetea la selección
    setMetodoSeleccionado(null);
    setMontoActualParaAgregar(0);
  };

  /**
   * @function eliminarPago
   * Se ejecuta cuando el usuario hace clic en el icono de eliminar de un pago ya aplicado.
   * Remueve el pago correspondiente de la lista `pagosAplicados` basándose en su índice.
   * @param {number} indice - El índice del pago a eliminar en el array `pagosAplicados`.
   */
  const eliminarPago = (indice: number) => {
    // Crea una copia del array de pagos aplicados para no mutar el estado directamente
    const nuevosPagos = [...pagosAplicados];
    // Elimina 1 elemento en la posición 'indice'
    nuevosPagos.splice(indice, 1);
    // Actualiza el estado con la nueva lista sin el pago eliminado
    setPagosAplicados(nuevosPagos);
  };

  /**
   * @function formatearMoneda
   * Formatea un valor numérico como moneda colombiana (COP) sin decimales.
   * @param {number} valor - El valor numérico a formatear.
   * @returns {string} - El valor formateado como string (ej: "$1.200.000").
   */
  const formatearMoneda = (valor: number): string => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0, // No mostrar centavos
      maximumFractionDigits: 0, // Asegura no mostrar centavos
    }).format(valor);
  };

  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    // Contenedor principal de la pantalla
    <div className="w-[430px] h-screen max-w-md mx-auto bg-gray-100 shadow-md overflow-hidden">
      {/* --- Cabecera --- */}
      <div className="bg-white p-5 relative h-[60px] flex items-center">
        {/* Botón de retroceso */}
        <button className="bg-gray-400 hover:bg-red-200 p-1 rounded-sm w-8 h-8 flex items-center justify-center mr-4">
          <ChevronLeft className="text-gray-500 w-5 h-5" />
        </button>

        {/* Título y Monto Total */}
        <div className="flex-1">
          <h1 className="text-sm font-medium text-black">Realizar pago</h1>
          <h2 className="text-xs text-gray-400 mt-1">
            Total | {formatearMoneda(montoTotalAPagar)}{" "}
            {/* Muestra el total a pagar */}
          </h2>
        </div>

        {/* Monto Restante */}
        <div className="px-3 py-1">
          <span
            className={`${
              // Cambia el color del texto según si falta pagar o ya se completó
              montoRestante > 0 ? "text-red-600" : "text-green-600"
            } text-sm font-medium`}
          >
            {/* Muestra el monto restante o $0 si ya se pagó todo */}
            {montoRestante > 0 ? formatearMoneda(montoRestante) : "$0"}
          </span>
        </div>
      </div>
      {/* --- Contenido Principal --- */}
      <div className="p-6 flex flex-col items-center">
        {/* --- Selector de Método de Pago --- */}
        <div className="relative w-[398px]">
          {/* Botón para desplegar/colapsar la lista de métodos */}
          <button
            className="w-full h-[60px] flex items-center justify-between bg-white text-black py-3 px-4 cursor-pointer"
            onClick={() => setEstaDesplegado(!estaDesplegado)} // Alterna el estado de despliegue
          >
            <div className="flex items-center gap-2">
              <Iconos icono="billetera" />
              <span className="font-normal text-sm">
                Agregar método de pago
              </span>
            </div>
            {/* Icono de flecha que rota según el estado de despliegue */}
            <ChevronDown
              className={`transition-transform ${
                estaDesplegado ? "rotate-180" : "" // Aplica rotación si está desplegado
              }`}
            />
          </button>

          {/* --- Lista Desplegable de Métodos de Pago --- */}
          {estaDesplegado && ( // Renderiza la lista solo si `estaDesplegado` es true
            <div className="absolute w-full bg-white border-gray-200 shadow-lg overflow-hidden z-10">
              {/* Campo de búsqueda */}
              <div className="relative p-2 bg-gray-100">
                <Search className="absolute left-4 top-3 text-gray-400 w-4 h-4" />{" "}
                {/* Icono de búsqueda */}
                <input
                  type="text"
                  placeholder="Buscar"
                  value={terminoBusqueda} // Vinculado al estado terminoBusqueda
                  onChange={(e) => setTerminoBusqueda(e.target.value)} // Actualiza el estado al escribir
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded"
                />
              </div>
              {/* Mapeo de los métodos filtrados para mostrarlos en la lista */}
              {metodosFiltrados.map((metodo) => (
                <div
                  key={metodo.id} // Key única para cada elemento de la lista
                  className="flex items-center px-4 py-3 hover:bg-indigo-50 cursor-pointer border-b border-gray-100 last:border-b-0 h-[60px]"
                  onClick={() => manejarSeleccionMetodo(metodo)} // Llama a la función al hacer clic
                >
                  {/* Icono o Imagen del método */}
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    {metodo.icon && metodo.icon}{" "}
                    {/* Muestra el icono si existe */}
                    {metodo.image && ( // Muestra la imagen si existe
                      <img
                        src={metodo.image}
                        alt={metodo.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    )}
                  </div>
                  {/* Nombre y Detalles del método */}
                  <div className="flex-1">
                    <p className="text-sm">{metodo.name}</p>
                    {metodo.details && ( // Muestra detalles si existen
                      <p className="text-xs text-gray-500">{metodo.details}</p>
                    )}
                    {/* Caso especial para cupones (ID 5), muestra cantidad y valor */}
                    {metodo.id === 5 &&
                      metodo.amountAvailable !== undefined && (
                        <p className="text-xs text-gray-500">
                          4 | {formatearMoneda(metodo.amountAvailable)}
                        </p>
                      )}
                  </div>
                  {/* Monto Disponible del método */}
                  {metodo.amountAvailable !== undefined &&
                    metodo.id !== 5 && ( // Muestra monto disponible si existe (y no es el cupón ya mostrado)
                      <p className="text-xs text-gray-700">
                        {formatearMoneda(metodo.amountAvailable)}
                      </p>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>{" "}
        {/* Fin Selector de Método de Pago */}
        {/* --- Input para Monto del Método Seleccionado --- */}
        {metodoSeleccionado && ( // Renderiza esta sección solo si hay un método seleccionado
          <div className="w-[398px] bg-white pl-3 mt-3 h-[60px] flex-col justify-center">
            {/* Fila superior: Nombre del método y botón "Completo" */}
            <div className="flex justify-between items-start -mb-1">
              {/* Nombre del método seleccionado */}
              <h3 className="font-normal text-gray-700 text-sm">
                {metodoSeleccionado.name}
              </h3>
              {/* Botón para pagar el total restante con este método */}
              <button
                onClick={manejarPagarCompleto} // Llama a la función al hacer clic
                className="flex items-center text-xs text-gray-600 px-2 py-1 rounded-full font-medium hover:bg-gray-100"
              >
                Completo <CheckCircle className="w-4 h-4 ml-1" />
              </button>
            </div>
            {/* Fila inferior: Input de monto y disponible */}
            <div className="flex items-center justify-between">
              {/* Input numérico para ingresar el monto */}
              <div className="flex items-center gap-2 flex-grow">
                <span className="text-gray-700">$</span>{" "}
                {/* Símbolo de moneda */}
                <input
                  type="number"
                  value={montoActualParaAgregar || ""} // Vinculado al estado, muestra vacío si es 0
                  onChange={(e) => {
                    // Actualiza el estado `montoActualParaAgregar` al cambiar el valor
                    const valor = Number(e.target.value);
                    // Calcula el monto máximo permitido para este input
                    const montoMaximo = Math.min(
                      // Usa el disponible del método si existe, sino usa el restante como límite
                      metodoSeleccionado.amountAvailable !== undefined
                        ? metodoSeleccionado.amountAvailable
                        : montoRestante,
                      montoRestante // Nunca puede ser mayor que lo que falta por pagar
                    );
                    // Actualiza el estado, asegurando que no exceda el máximo ni sea negativo
                    setMontoActualParaAgregar(
                      valor > montoMaximo ? montoMaximo : valor < 0 ? 0 : valor
                    );
                  }}
                  onKeyDown={(e) => {
                    // Permite agregar el pago presionando Enter
                    if (
                      e.key === "Enter" &&
                      montoActualParaAgregar > 0 &&
                      metodoSeleccionado
                    ) {
                      manejarAgregarPago(); // Llama a la función para agregar el pago
                    }
                  }}
                  className="flex-1 py-1 focus:outline-none font-medium" // Estilos del input
                  style={{ borderBottom: "none", fontSize: "1rem" }} // Estilos adicionales
                  placeholder="0" // Texto placeholder
                  min="0" // Valor mínimo permitido
                  max={Math.min(
                    // Valor máximo permitido (calculado igual que en onChange)
                    metodoSeleccionado.amountAvailable !== undefined
                      ? metodoSeleccionado.amountAvailable
                      : montoRestante,
                    montoRestante
                  )}
                />
              </div>
              {/* Muestra el monto disponible del método seleccionado, si aplica */}
              {metodoSeleccionado.amountAvailable !== undefined && (
                <p className="text-xs text-gray-500 text-right ml-2">
                  Disponible:{" "}
                  {formatearMoneda(metodoSeleccionado.amountAvailable)}
                </p>
              )}
            </div>
          </div>
        )}{" "}
        {/* Fin Input para Monto */}
        {/* --- Resumen de Pagos --- */}
        <div className="w-[398px] bg-white p-4 mt-3 h-[60px] flex items-center">
          {/* Muestra el total que se ha pagado hasta ahora */}
          <div /* quite mb-3 para mejor alineacion vertical */>
            <span className="text-gray-600 text-xs">Total pagos</span>
            <p className="text-base font-medium text-gray-800">
              {formatearMoneda(montoTotalPagado)}{" "}
              {/* Muestra el total pagado calculado */}
            </p>
          </div>
        </div>
        {/* --- Lista de Pagos Aplicados --- */}
        {pagosAplicados.length > 0 && ( // Renderiza la lista solo si hay pagos aplicados
          <div className="w-[398px] bg-white p-4 mt-3">
            <div className="space-y-3">
              {" "}
              {/* Espaciado entre elementos de la lista */}
              {/* Mapeo de los pagos aplicados para mostrarlos */}
              {pagosAplicados.map((pago, indice) => (
                <div
                  key={indice} // Usa el índice como key (considerar un ID más estable si la lista cambia mucho)
                  className="flex items-center justify-between border-b border-gray-100 pb-3" // Estilos de cada fila
                >
                  {/* Lado izquierdo: Icono/Imagen y Nombre/Detalles del método */}
                  <div className="flex items-center gap-3">
                    {/* Contenedor del icono/imagen */}
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                      {pago.method.icon && pago.method.icon}{" "}
                      {/* Muestra icono si existe */}
                      {pago.method.image && ( // Muestra imagen si existe
                        <img
                          src={pago.method.image}
                          alt={pago.method.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      )}
                    </div>
                    {/* Nombre y detalles */}
                    <div>
                      <p className="text-sm font-medium">
                        {pago.method.name} {/* Nombre del método usado */}
                      </p>
                      {pago.method.details && ( // Muestra detalles si existen
                        <p className="text-xs text-gray-500">
                          {pago.method.details}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Lado derecho: Monto aplicado y botón de eliminar */}
                  <div className="flex items-center gap-2">
                    {/* Monto aplicado con este método */}
                    <span className="text-sm font-medium">
                      {formatearMoneda(pago.amount)}
                    </span>
                    {/* Botón para eliminar este pago específico */}
                    <button
                      onClick={() => eliminarPago(indice)} // Llama a la función con el índice
                      className="text-red-500 hover:text-red-700"
                    >
                      <Iconos icono="eliminar" /> {/* Icono de eliminar */}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}{" "}
        {/* Fin Lista de Pagos Aplicados */}
      </div>{" "}
      {/* Fin Contenido Principal */}
    </div> // Fin Contenedor principal de la pantalla
  );
};

export default PaymentScreen; // Exporta el componente para ser usado en otras partes
