import React from "react";
import { CheckCircle } from "lucide-react";
import { PaymentMethod } from "./types";
import { formatCurrency } from "./utils";

interface PaymentInputProps {
  method: PaymentMethod;
  amount: number;
  remainingAmount: number;
  onAmountChange: (amount: number) => void;
  onAddPayment: () => void;
  onFullPayment: () => void;
}

export const PaymentInput: React.FC<PaymentInputProps> = ({
  method,
  amount,
  remainingAmount,
  onAmountChange,
  onAddPayment,
  onFullPayment,
}) => {
  const maxAmount = Math.min(
    method.amountAvailable !== undefined ? method.amountAvailable : remainingAmount,
    remainingAmount
  );

  return (
    <div className="w-[398px] bg-white pl-3 mt-3 h-[60px] flex-col justify-center">
      <div className="flex justify-between items-start -mb-1">
        <h3 className="font-normal text-gray-700 text-sm">{method.name}</h3>
        <button
          onClick={onFullPayment}
          className="flex items-center text-xs text-gray-600 px-2 py-1 rounded-full font-medium hover:bg-gray-100"
        >
          Completo <CheckCircle className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-grow">
          <span className="text-gray-700">$</span>
          <input
            type="number"
            value={amount || ""}
            onChange={(e) => {
              const value = Number(e.target.value);
              onAmountChange(value > maxAmount ? maxAmount : value < 0 ? 0 : value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && amount > 0) {
                onAddPayment();
              }
            }}
            className="flex-1 py-1 focus:outline-none font-medium"
            style={{ borderBottom: "none", fontSize: "1rem" }}
            placeholder="0"
            min="0"
            max={maxAmount}
          />
        </div>
        {method.amountAvailable !== undefined && (
          <p className="text-xs text-gray-500 text-right ml-2">
            Disponible: {formatCurrency(method.amountAvailable)}
          </p>
        )}
      </div>
    </div>
  );
};