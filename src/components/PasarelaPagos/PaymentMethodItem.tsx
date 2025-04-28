import React from "react";
import { PaymentMethod } from "./types";
import { formatCurrency } from "./utils";

interface PaymentMethodItemProps {
  method: PaymentMethod;
  onClick: () => void;
}

export const PaymentMethodItem: React.FC<PaymentMethodItemProps> = ({ method, onClick }) => (
  <div
    className="flex items-center px-4 py-3 hover:bg-indigo-50 cursor-pointer border-b border-gray-100 last:border-b-0 h-[60px]"
    onClick={onClick}
  >
    <div className="w-6 h-6 flex items-center justify-center mr-3">
      {method.icon && method.icon}
      {method.image && (
        <img
          src={method.image}
          alt={method.name}
          className="w-6 h-6 rounded-full object-cover"
        />
      )}
    </div>
    <div className="flex-1">
      <p className="text-sm">{method.name}</p>
      {method.details && <p className="text-xs text-gray-500">{method.details}</p>}
      {method.id === 5 && method.amountAvailable !== undefined && (
        <p className="text-xs text-gray-500">
          4 | {formatCurrency(method.amountAvailable)}
        </p>
      )}
    </div>
    {method.amountAvailable !== undefined && method.id !== 5 && (
      <p className="text-xs text-gray-700">
        {formatCurrency(method.amountAvailable)}
      </p>
    )}
  </div>
);