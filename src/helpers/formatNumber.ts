const formatNumber = (number: number) => {
  return new Intl.NumberFormat("ES-CO").format(number);
};

export default formatNumber;

export const formatNumberInput = (number: number) => {
  return new Intl.NumberFormat("es-CO", {
    useGrouping: true,
    maximumFractionDigits: 0,
  }).format(number);
};
