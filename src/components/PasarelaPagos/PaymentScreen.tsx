import React, { useState } from "react";
import PaymentHeader from "./PaymentHeader";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { PaymentInput } from "./PaymentInput";
import { PaymentSummary } from "./PaymentSummary";
import { AppliedPaymentsList } from "../PasarelaPagos/AppliedPaymentsList";
import {
  PaymentMethod,
  AppliedPayment,
  PaymentScreenProps,
} from "../PasarelaPagos/types";
import BancolombiaLogo from "./assets/bancolombia.jpeg";
import DaviviendaLogo from "./assets/davivienda.jpeg";
import NequiLogo from "./assets/nequi.jpeg";
import DaviplataLogo from "./assets/daviplata.jpeg";
import Iconos from "../Icons";

const defaultPaymentMethods: PaymentMethod[] = [
  {
    id: 1,
    name: "Efectivo",
    type: "cash",
    icon: <Iconos icono="billete" />,
  },
  {
    id: 2,
    name: "Crédito 30 días",
    type: "credit",
    amountAvailable: 1200000,
    icon: <Iconos icono="credito" />,
  },
  {
    id: 3,
    name: "Contra entrega",
    type: "cash",
    icon: <Iconos icono="contraentrega" />,
  },
  {
    id: 4,
    name: "Saldo a favor",
    type: "wallet",
    amountAvailable: 200000,
    icon: <Iconos icono="monedas" />,
  },
  {
    id: 5,
    name: "Cupones",
    type: "coupon",
    amountAvailable: 120000,
    icon: <Iconos icono="promocion" />,
  },
  {
    id: 6,
    name: "Bancolombia",
    type: "bank",
    details: "Ahorros | 72673284793",
    image: BancolombiaLogo,
  },
  {
    id: 7,
    name: "Davivienda",
    type: "bank",
    details: "Corriente | 546534834",
    image: DaviviendaLogo,
  },
  {
    id: 8,
    name: "Nequi",
    type: "wallet",
    details: "Mobil | 32123338660",
    image: NequiLogo,
  },
  {
    id: 9,
    name: "Daviplata",
    type: "wallet",
    details: "Ahorros | 569652846",
    image: DaviplataLogo,
  },
];
export const PaymentScreen: React.FC<PaymentScreenProps> = ({
  onBack,
  initialAmount,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null
  );
  const [currentAmount, setCurrentAmount] = useState(0);
  const [appliedPayments, setAppliedPayments] = useState<AppliedPayment[]>([]);
  const [totalAmount] = useState(initialAmount);

  const totalPaid = appliedPayments.reduce(
    (sum, payment) => sum + payment.amount,
    0
  );
  const remainingAmount = totalAmount - totalPaid;

  const handleAddPayment = () => {
    if (!selectedMethod || currentAmount <= 0) return;

    setAppliedPayments([
      ...appliedPayments,
      {
        method: selectedMethod,
        amount: currentAmount,
      },
    ]);

    setSelectedMethod(null);
    setCurrentAmount(0);
  };

  const handleFullPayment = () => {
    if (!selectedMethod) return;

    setAppliedPayments([
      ...appliedPayments,
      {
        method: selectedMethod,
        amount: remainingAmount,
      },
    ]);

    setSelectedMethod(null);
    setCurrentAmount(0);
  };

  const handleRemovePayment = (index: number) => {
    const newPayments = [...appliedPayments];
    newPayments.splice(index, 1);
    setAppliedPayments(newPayments);
  };

  return (
    <div className="h-full w-[430px] bg-gray-100 overflow-hidden">
      <PaymentHeader
        totalAmount={totalAmount}
        remainingAmount={remainingAmount}
        onBack={onBack}
      />
      <div className="p-6 flex flex-col items-center">
        <PaymentMethodSelector
          methods={defaultPaymentMethods}
          onSelect={setSelectedMethod}
        />

        {selectedMethod && (
          <PaymentInput
            method={selectedMethod}
            amount={currentAmount}
            remainingAmount={remainingAmount}
            onAmountChange={setCurrentAmount}
            onAddPayment={handleAddPayment}
            onFullPayment={handleFullPayment}
          />
        )}

        <PaymentSummary totalPaid={totalPaid} />

        {appliedPayments.length > 0 && (
          <AppliedPaymentsList
            payments={appliedPayments}
            onRemove={handleRemovePayment}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentScreen;
