import React, { useState } from "react";
import { InputNumberCustom } from "./InputNumberCustom";
import { iCredito } from "../interfaces/credits.interface";
import { useCreditos } from "../hooks/useCreditos";
import { useParcialidades } from "../hooks/useParcialidades";
import moment from "moment";
interface iProps {
  idCliente: string | undefined;
  reload?: (e?: any) => any;
}
export const FormCredito = ({ idCliente, reload }: iProps) => {
  const INITIAL_STATE = {
    fechaLiquidacion: "",
    fechaPrestamo: "",
    idCliente: 0,
    monto: 1,
    montoDeudor: 1,
    numeroPagos: 1,
    periodoDias: 1,
  };
  const [form, setForm] = useState<iCredito>(INITIAL_STATE);
  const { nuevoCredito } = useCreditos();
  const { registrarParcialidades } = useParcialidades();
  const onChange = (event: any) => {
    let value = event.target.value;
    if (value > 10000) value = 10000;
    if (value < 1) value = 1;
    setForm({ ...form, [event.target.name]: value });
  };
  const save = (event: any) => {
    event.preventDefault();
    let fechaPrestamo = moment().format();
    let id: number = idCliente ? parseInt(idCliente) : 0;
    let resp = nuevoCredito({
      ...form,
      idCliente: id,
      fechaPrestamo,
      montoDeudor: form.monto,
    });
    if (!resp) return;
    // Registra las parcialidades
    registrarParcialidades(
      form.monto,
      fechaPrestamo,
      form.numeroPagos,
      form.periodoDias,
      resp.id
    );
    // Resetea el formulario
    setForm(INITIAL_STATE);
    // Recarga la lista de créditos del cliente
    if (reload) reload();
  };
  return (
    <form onSubmit={save}>
      <InputNumberCustom
        label="Monto a préstar (Max 10,000)*"
        max={10000}
        min={0}
        name="monto"
        onChange={onChange}
        value={form.monto}
        required={true}
      ></InputNumberCustom>
      <InputNumberCustom
        label="Número de pagos*"
        max={10000}
        min={1}
        name="numeroPagos"
        onChange={onChange}
        value={form.numeroPagos}
        required={true}
      ></InputNumberCustom>
      <InputNumberCustom
        label="Periodo de días*"
        max={10000}
        min={1}
        name="periodoDias"
        onChange={onChange}
        value={form.periodoDias}
        required={true}
      ></InputNumberCustom>
      <p>
        <small className="mt-3 text-red text-right">
          Todos los campos con * son obligatorios
        </small>
      </p>
      <input
        type={"submit"}
        value={"Guardar"}
        className="btn btn-primary my-2"
      ></input>
    </form>
  );
};
