import React, { useRef, useEffect, useState } from "react";
import { PaymentInputProps } from "./types";
import { formatNumberInput } from "../../helpers/formatNumberInput";

export const PaymentInput: React.FC<PaymentInputProps> = ({
  method,
  amount,
  remainingAmount,
  onAmountChange,
  onAddPayment,
  onFullPayment,
}) => {
  const [displayValue, setDisplayValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setDisplayValue(amount ? formatNumberInput(amount) : "");
  }, [amount]);

  const maxAmount = Math.min(
    method.amountAvailable !== undefined
      ? method.amountAvailable
      : remainingAmount,
    remainingAmount
  );

  const completeCheckboxId = `complete-payment-${method.name.replace(
    /\s+/g,
    "-"
  )}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, "");
    const numericValue = rawValue === "" ? 0 : parseInt(rawValue, 10);
    const clampedValue = Math.min(Math.max(numericValue, 0), maxAmount);

    onAmountChange(clampedValue);
    setDisplayValue(rawValue === "" ? "" : formatNumberInput(clampedValue));
  };

  const handleAvailablePayment = () => {
    // Usar el monto disponible si es menor que el remainingAmount
    const paymentAmount =
      method.amountAvailable !== undefined
        ? Math.min(method.amountAvailable, remainingAmount)
        : remainingAmount;
    onAmountChange(paymentAmount);
    onAddPayment();
  };

  return (
    <div className="w-[398px] bg-white pl-3 mt-3 h-[60px] flex flex-col justify-between py-1">
      <div className="flex justify-start items-center">
        <h3 className="font-normal text-gray-700 text-sm">{method.name}</h3>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 flex-grow">
          <span className="text-gray-700">$</span>
          <input
            ref={inputRef}
            type="text"
            value={displayValue}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && amount > 0) {
                onAddPayment();
              }
            }}
            className="flex-1 py-1 focus:outline-none font-medium text-black bg-white"
            style={{ borderBottom: "none", fontSize: "1rem" }}
            placeholder="0"
            inputMode="numeric"
          />
        </div>
        <div className="flex items-center ml-2 flex-shrink-0">
          {method.amountAvailable !== undefined ? (
            <div className="flex items-center">
              <div
                id={completeCheckboxId}
                className="w-4 h-4 border mr-1 border-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:border-gray-600"
                onClick={handleAvailablePayment} // Cambiado a handleAvailablePayment
              ></div>
              <label
                htmlFor={completeCheckboxId}
                className="text-xs text-gray-600 cursor-pointer hover:underline mr-1"
              >
                Disponible: {formatNumberInput(method.amountAvailable)}
              </label>
            </div>
          ) : (
            <div className="flex items-center">
              <div
                id={completeCheckboxId}
                className="w-4 h-4 border mr-1 border-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:border-gray-600"
                onClick={onFullPayment}
              ></div>
              <label
                htmlFor={completeCheckboxId}
                className="text-xs text-gray-600 cursor-pointer hover:underline mr-1"
              >
                Completo: {formatNumberInput(remainingAmount)}
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
