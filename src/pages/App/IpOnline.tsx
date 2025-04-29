import PaymentScreen from "../../components/PasarelaPagos/PaymentScreen";
import React, { useState, useRef } from "react";

const IpOnline = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [amount, setAmount] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (panelRef.current) {
      panelRef.current.classList.remove("animate-slide-in");
      panelRef.current.classList.add("animate-slide-out");
      setTimeout(() => setShowPayment(false), 300);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="m-auto p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Pago Rápido</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Monto a pagar (COP)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ej: 3900000"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowPayment(true)}
            disabled={!amount}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              !amount
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            Ir a Pagar
          </button>
        </div>
      </div>
      {showPayment && (
        <div
          ref={panelRef}
          className="animate-slide-in fixed right-0 top-0 h-full w-[430px] bg-white shadow-lg z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <PaymentScreen onBack={handleClose} initialAmount={Number(amount)} />
        </div>
      )}
    </div>
  );
};

export default IpOnline;
