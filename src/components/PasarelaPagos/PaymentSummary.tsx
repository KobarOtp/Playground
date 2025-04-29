import React from "react";
import { formatCurrency } from "./utils";

interface PaymentSummaryProps {
  totalPaid: number;
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  totalPaid,
}) => (
  <div
    className="w-[398px] bg-white p-4 mt-3 h-[60px] 
  flex items-center border-b border-gray-100"
  >
    <div>
      <span className="text-gray-600 text-xs">Total pagos</span>
      <p className="text-base font-medium text-gray-800">
        {formatCurrency(totalPaid)}
      </p>
    </div>
  </div>
);
