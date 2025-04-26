import React, { ReactNode, useState } from "react";
import Iconos from "./components/Icons";
import BancolombiaLogo from "../src/assets/bancolombia.jpeg";
import DaviviendaLogo from "../src/assets/davivienda.jpeg";
import NequiLogo from "../src/assets/nequi.jpeg";
import DaviplataLogo from "../src/assets/daviplata.jpeg";

interface PaymentMethod {
  id: number;
  name: string;
  icon?: ReactNode;
  image?: string;
  numero_cuenta?: string;
  saldo_favor?: number;
  credito?: {
    tiempo?: string;
    cantidad_credito: number;
  };
}

interface ModalPasarelaDePagoProps {
  title?: string;
  subtitle?: string;
  money?: number;
  onBack?: () => void;
}

export const ModalPasarelaDePago: React.FC<ModalPasarelaDePagoProps> = ({
  title = "Pasarela de Pago",
  subtitle = "Total: $3,900,000",
  money = 3900000,
  onBack = () => {},
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [payments, setPayments] = useState<PaymentMethod[]>([]);
  const [customAmounts, setCustomAmounts] = useState<Record<number, number>>(
    {}
  );

  const paymentMethods: PaymentMethod[] = [
    { id: 1, name: "Efectivo", icon: <Iconos icono="billete" /> },
    { id: 2, name: "Credito", icon: <Iconos icono="credito" /> },
    { id: 3, name: "Contra Entrega", icon: <Iconos icono="contraentrega" /> },
    { id: 4, name: "Saldo a favor", icon: <Iconos icono="monedas" /> },
    { id: 5, name: "Cupones", icon: <Iconos icono="promocion" /> },
    { id: 6, name: "Bancolombia", image: BancolombiaLogo },
    { id: 7, name: "Davivienda", image: DaviviendaLogo },
    { id: 8, name: "Nequi", image: NequiLogo },
    { id: 9, name: "Daviplata", image: DaviplataLogo },
  ];

  const handleAddPayment = (method: PaymentMethod): void => {
    if (!payments.some((p) => p.id === method.id)) {
      setPayments([...payments, method]);
    }
    setIsDropdownOpen(false);
  };

  const handleRemovePayment = (id: number): void => {
    setPayments(payments.filter((payment) => payment.id !== id));
    const newCustomAmounts = { ...customAmounts };
    delete newCustomAmounts[id];
    setCustomAmounts(newCustomAmounts);
  };

  const handleAmountChange = (id: number, value: string): void => {
    const numericValue = parseFloat(value) || 0;
    setCustomAmounts({
      ...customAmounts,
      [id]: numericValue,
    });
  };

  const calculatePaymentAmount = (paymentId: number): number => {
    if (customAmounts[paymentId] !== undefined) {
      return customAmounts[paymentId];
    }

    if (Object.keys(customAmounts).length === 0) {
      return money / payments.length;
    }

    return 0;
  };

  const calculateRemainingAmount = (): number => {
    const customAmountsSum = Object.values(customAmounts).reduce(
      (sum, amount) => sum + (amount || 0),
      0
    );
    return money - customAmountsSum;
  };

  const formatMoney = (value: number): string => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-[430px] h-screen max-w-md mx-auto bg-gray-100 shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-white p-5 relative h-[60px] flex items-center">
        <button
          onClick={onBack}
          className="bg-gray-400 hover:bg-red-200 p-1 rounded-sm w-8 h-8
               flex items-center justify-center mr-4"
          aria-label="Volver atrás"
        >
          <Iconos icono={"flechaIzq"} />
        </button>

        <div className="flex-1">
          <h1 className="text-sm font-roboto text-black font-medium">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-xs text-gray-400 mt-1 font-roboto">
              {subtitle}
            </h2>
          )}
        </div>

        <div className="px-3 py-1 rounded-full">
          <span className="text-red-600 font-roboto text-sm font-medium">
            {formatMoney(money)}
          </span>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="p-6 flex flex-col items-center">
        {/* Dropdown */}
        <div className="mb-4 relative w-[398px]">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full h-[60px] flex items-center justify-between bg-white
                   text-black py-3 px-4 cursor-pointer"
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
          >
            <div className="flex items-center gap-2">
              <Iconos icono={"billetera"} />
              <span className="font-normal text-xm font-roboto">
                Agregar método de pago
              </span>
            </div>
            <Iconos icono={"flechaabajo"} />
          </button>

          {isDropdownOpen && (
            <div
              className="absolute w-full bg-white border-gray-200 
                         shadow-lg overflow-hidden z-10"
              role="listbox"
            >
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center px-4 py-3 hover:bg-indigo-50 
                             cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleAddPayment(method)}
                  role="option"
                  aria-selected={payments.some((p) => p.id === method.id)}
                >
                  {method.image ? (
                    <img
                      src={method.image}
                      alt={method.name}
                      className="w-6 h-6 mr-3 object-contain"
                    />
                  ) : (
                    <span className="mr-3 text-lg">{method.icon}</span>
                  )}
                  <span>{method.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lista de pagos */}
        {payments.length > 0 && (
          <div className="w-[398px] space-y-2">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between bg-white p-3 rounded"
              >
                <div className="flex items-center">
                  {payment.image ? (
                    <img
                      src={payment.image}
                      alt={payment.name}
                      className="w-6 h-6 mr-3 object-contain"
                    />
                  ) : (
                    <span className="mr-3 text-lg">{payment.icon}</span>
                  )}
                  <span className="font-medium">{payment.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={customAmounts[payment.id] || ""}
                    onChange={(e) =>
                      handleAmountChange(payment.id, e.target.value)
                    }
                    className="w-20 border rounded px-2 py-1 text-right appearance-none [-moz-appearance:textfield]"
                    placeholder=""
                  />
                  <span className="text-gray-500 w-20 text-right">
                    {formatMoney(calculatePaymentAmount(payment.id))}
                  </span>
                  <button
                    onClick={() => handleRemovePayment(payment.id)}
                    className="text-red-500 hover:text-red-700 ml-2"
                    aria-label={`Eliminar ${payment.name}`}
                  >
                    <Iconos icono="eliminar" />
                  </button>
                </div>
              </div>
            ))}

            {/* Mostrar saldo restante */}
            <div className="bg-white p-3 rounded">
              <div className="flex justify-between">
                <span className="font-medium">Saldo restante:</span>
                <span
                  className={
                    calculateRemainingAmount() > 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {formatMoney(calculateRemainingAmount())}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Total de pagos */}
        <div className="bg-white p-4 w-[398px] mt-4 rounded">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-normal text-sm">
              Total pagos
            </span>
            <span className="text-lg font-medium text-gray-800">
              {formatMoney(money - calculateRemainingAmount())}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
