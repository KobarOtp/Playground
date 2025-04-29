import React from "react";
import { formatCurrency } from "./utils";
import Iconos from "../Icons";
import { AppliedPaymentsListProps } from "./types";

export const AppliedPaymentsList: React.FC<AppliedPaymentsListProps> = ({
  payments,
  onRemove,
}) => (
  <div className="w-[398px] bg-white">
    <div>
      {payments.map((payment, index) => (
        <div
          key={index}
          className="h-[60px] border-b border-gray-100 p-4 flex flex-col justify-center"
        >
          <div className="text-xs pl-1 mb-1">{payment.method.name}</div>
          <div className="flex justify-between items-center">
            <span className="text-base font-medium">
              {formatCurrency(payment.amount)}
            </span>
            <div className="flex items-center gap-2 ml-auto">
              {payment.method.details && (
                <p className="text-xs text-gray-500">
                  {payment.method.details}
                </p>
              )}
              <button
                onClick={() => onRemove(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Iconos icono="eliminar" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
