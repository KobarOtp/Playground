export const formatNumberInput = (number: number) => {
  return new Intl.NumberFormat("es-CO", {
    useGrouping: true,
    maximumFractionDigits: 0,
  }).format(number);
};
