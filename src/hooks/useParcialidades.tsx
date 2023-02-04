import moment from "moment";
import { iParcialidad } from "../interfaces";

export const useParcialidades = () => {
  const registrarParcialidades = (
    monto: number,
    fechaPrestamo: string,
    numeroPagos: number,
    periodoDias: number,
    idCredito: number
  ) => {
    let resp: string = localStorage.getItem("parcialities") || "[]";
    let parcialidades: iParcialidad[] = JSON.parse(resp);
    let date = fechaPrestamo;
    const montoParcialidad = monto / numeroPagos;
    debugger;
    for (let i = 0; i < numeroPagos; i++) {
      debugger;
      date = moment(date).add(periodoDias, "days").format();
      debugger;
      let parcialidad: iParcialidad = {
        cubierto: false,
        fechaLimite: date,
        idCredito,
        montoApagar: montoParcialidad,
        montoRestante: montoParcialidad,
      };
      parcialidades.push(parcialidad);
    }
    localStorage.setItem("parcialities", JSON.stringify(parcialidades));
    alert("Parcialidades registradas correctamente");
  };
  return { registrarParcialidades };
};
