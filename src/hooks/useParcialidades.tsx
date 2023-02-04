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

    for (let i = 0; i < numeroPagos; i++) {
      date = moment(date).add(periodoDias, "days").format();

      let _id: number =
        parcialidades[parcialidades.length > 0 ? parcialidades.length - 1 : 0]
          ?.id || 0;
      _id++;
      let parcialidad: iParcialidad = {
        id: _id,
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
