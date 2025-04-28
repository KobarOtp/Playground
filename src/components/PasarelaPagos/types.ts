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
