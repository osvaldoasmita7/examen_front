import React from "react";
import { iParcialidad } from "../interfaces";
import moment from "moment";
interface iProps {
  x: iParcialidad;
  index: number;
}
export const ElementoParcialidad = ({ x, index }: iProps) => {
  return (
    <li>
      <h5 className="mb-0 mt-3">Parcialidad {index + 1}</h5>
      {moment(x.fechaLimite).format("MMMM Do YYYY, h:mm:ss a")}
      <br></br>
      <label className="text-red">Monto prestado: ${x.montoApagar}</label>
      <br></br>
      <label className="text-warning">Monto restante: ${x.montoRestante}</label>
      <br></br>
      <small className="text-success">
        {x.cubierto ? "LIQUIDADO" : "PENDIENTE"}
      </small>
      <br></br>
      {!x.cubierto && <button className="btn btn-success">Pagar</button>}
    </li>
  );
};
