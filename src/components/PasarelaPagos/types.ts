export interface PaymentMethod {
  id: number;
  name: string;
  type: "cash" | "credit" | "bank" | "coupon" | "wallet";
  amountAvailable?: number;
  details?: string;
  icon?: React.ReactNode;
  image?: string;
}

export interface AppliedPayment {
  method: PaymentMethod;
  amount: number;
}

export interface PaymentScreenProps {
  onBack: () => void;
  initialAmount: number;
}

export interface PaymentInputProps {
  method: PaymentMethod;
  amount: number;
  remainingAmount: number;
  onAmountChange: (amount: number) => void;
  onAddPayment: () => void;
  onFullPayment: () => void;
}

export interface AppliedPaymentsListProps {
  payments: AppliedPayment[];
  onRemove: (index: number) => void;
}
