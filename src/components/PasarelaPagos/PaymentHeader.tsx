import React from "react";
import { ChevronLeft } from "lucide-react";
import { formatCurrency } from "./utils";

interface PaymentHeaderProps {
  totalAmount: number;
  remainingAmount: number;
  onBack: () => void;
}

 const PaymentHeader: React.FC<PaymentHeaderProps> = ({
  totalAmount,
  remainingAmount,
  onBack,
}) => (
  <div className="bg-white p-5 relative h-[60px] flex items-center">
    <button 
      onClick={onBack}
      className="bg-gray-400 hover:bg-red-200 p-1 rounded-sm w-8 h-8 flex items-center justify-center mr-4"
    >
      <ChevronLeft className="text-gray-500 w-5 h-5" />
    </button>

    <div className="flex-1">
      <h1 className="text-sm font-medium text-black">Realizar pago</h1>
      <h2 className="text-xs text-gray-400 mt-1">
        Total | {formatCurrency(totalAmount)}
      </h2>
    </div>

    <div className="px-3 py-1">
      <span className={`${remainingAmount > 0 ? "text-red-600" : "text-green-600"} text-sm font-medium`}>
        {remainingAmount > 0 ? formatCurrency(remainingAmount) : "$0"}
      </span>
    </div>
  </div>
);

export default PaymentHeader;