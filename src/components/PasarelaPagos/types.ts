// --- INTERFACES ---

/**
 * @interface MetodoPago
 * Define la estructura de un método de pago disponible.
 */
export interface MetodoPago {
  id: number; // Identificador único del método de pago
  name: string; // Nombre descriptivo del método de pago (ej: "Efectivo", "Bancolombia")
  type: "cash" | "credit" | "bank" | "coupon" | "wallet"; // Categoría del método de pago
  amountAvailable?: number; // Monto disponible (opcional, para créditos, saldos, cupones)
  details?: string; // Detalles adicionales (ej: número de cuenta, tipo de cuenta)
  icon?: React.ReactNode; // Componente de icono (opcional)
  image?: string; // Ruta de la imagen/logo (opcional)
}

/**
 * @interface PagoAplicado
 * Define la estructura de un pago que ya ha sido aplicado o agregado a la transacción.
 */
export interface PagoAplicado {
  method: MetodoPago; // El método de pago utilizado
  amount: number; // El monto aplicado con este método
}