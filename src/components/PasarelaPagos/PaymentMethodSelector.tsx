import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { PaymentMethod } from "./types";
import { PaymentMethodItem } from "../PasarelaPagos/PaymentMethodItem";
import Iconos from "../Icons";

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  onSelect: (method: PaymentMethod) => void;
}

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  methods,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMethods = methods.filter((method) =>
    method.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-[398px]">
      <button
        className="w-full h-[60px] flex items-center justify-between bg-white text-black py-3 px-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Iconos icono="billetera" />
          <span className="font-normal text-sm">Agregar método de pago</span>
        </div>
        <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute w-full bg-white border-gray-200 shadow-lg overflow-hidden z-10">
          <div className="relative p-2 bg-gray-100">
            <Search className="absolute left-4 top-3 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded"
            />
          </div>
          {filteredMethods.map((method) => (
            <PaymentMethodItem 
              key={method.id} 
              method={method} 
              onClick={() => {
                onSelect(method);
                setIsOpen(false);
                setSearchTerm("");
              }} 
            />
          ))}
        </div>
      )}
    </div>
  );
};