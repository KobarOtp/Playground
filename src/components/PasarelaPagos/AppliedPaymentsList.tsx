import React from "react";
import { AppliedPayment } from "./types";
import { formatCurrency } from "./utils";
import Iconos from "../Icons";

interface AppliedPaymentsListProps {
  payments: AppliedPayment[];
  onRemove: (index: number) => void;
}

export const AppliedPaymentsList: React.FC<AppliedPaymentsListProps> = ({
  payments,
  onRemove,
}) => (
  <div className="w-[398px] bg-white p-4 mt-3">
    <div className="space-y-3">
      {payments.map((payment, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-gray-100 pb-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
              {payment.method.icon && payment.method.icon}
              {payment.method.image && (
                <img
                  src={payment.method.image}
                  alt={payment.method.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
              )}
            </div>
            <div>
              <p className="text-sm font-medium">{payment.method.name}</p>
              {payment.method.details && (
                <p className="text-xs text-gray-500">{payment.method.details}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              {formatCurrency(payment.amount)}
            </span>
            <button
              onClick={() => onRemove(index)}
              className="text-red-500 hover:text-red-700"
            >
              <Iconos icono="eliminar" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);