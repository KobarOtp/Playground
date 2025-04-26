const formatNumber = (number: number) => {
    return new Intl.NumberFormat('ES-CO').format(number);
}

export default formatNumber;