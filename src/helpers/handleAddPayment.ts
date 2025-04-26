const handleAddPayment = (method: PaymentMethod): void => {
    if (!payments.some((p) => p.id === method.id)) {
      setPayments([...payments, method]);
    }
    setIsDropdownOpen(false);
  };