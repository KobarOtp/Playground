export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatNumberInput = (number: number) => {
  return new Intl.NumberFormat("es-CO", {
    useGrouping: true,
    maximumFractionDigits: 0,
  }).format(number);
};
