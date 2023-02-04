import React, { useState } from "react";
import { InputNumberCustom } from "./InputNumberCustom";
import { iPago } from "../interfaces";
import { usePagos } from "../hooks/usePagos";

interface iProps {
  montoAPagar: number;
  idParcialidad: number;
  reload?: () => any;
}
export const FormPago = ({ montoAPagar, idParcialidad, reload }: iProps) => {
  const { nuevoPago } = usePagos();
  const [form, setForm] = useState<iPago>({
    monto: montoAPagar,
    idParcialidad: idParcialidad,
    fecha: "",
  });
  const onChange = (event: any) => {
    let value = event.target.value;
    if (value > 10000) value = 10000;
    if (value < 1) value = 1;
    setForm({ ...form, [event.target.name]: value });
  };
  const save = (event: any) => {
    event?.preventDefault();
    let resp = nuevoPago(montoAPagar, idParcialidad);
    if (!resp) return;
    setForm({
      monto: 0,
      idParcialidad: idParcialidad,
      fecha: "",
    });
    debugger;
    if (reload) reload();
  };
  return (
    <form onSubmit={save}>
      <InputNumberCustom
        label={`Monto a pagar`}
        onChange={onChange}
        name="monto"
        value={form.monto}
        max={montoAPagar}
        min={1}
        disabled={true}
      ></InputNumberCustom>
      <input
        type={"submit"}
        className="btn btn-success w-100 mt-3"
        value={form.monto <= 0 ? "PAGADO" : `PAGAR ${form.monto}`}
        disabled={form.monto <= 0 && true}
      ></input>
    </form>
  );
};
