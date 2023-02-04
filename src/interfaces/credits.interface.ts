export interface iCredito {
  id?: number | null;
  idCliente: number;
  monto: number;
  fechaPrestamo: string;
  fechaLiquidacion: string;
  montoDeudor: number;
  numeroPagos: number;
  periodoDias: number;
}
