import { useEffect, useState } from "react";
import moment from "moment";

import { iCredito } from "../interfaces/credits.interface";
import { iParcialidad } from "../interfaces";

import { ElementoParcialidad } from "./ElementoParcialidad";
interface iProps {
  x: iCredito;
  reload?: () => void;
}
export const ElementoCredito = ({ x, reload }: iProps) => {
  let [parcialidades, setParcialidades] = useState<iParcialidad[]>();

  const getData = () => {
    let resp = localStorage.getItem("parcialities") || "[]";
    let parcialities = JSON.parse(resp);

    parcialities = parcialities?.filter(
      (y: iParcialidad) => y.idCredito === x.id
    );
    setParcialidades(parcialities);
  };
  const toReload = () => {
    if (reload) {
      reload();
      getData();
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("reloadcredito", reload);

  return (
    <>
      <div>
        {x.fechaLiquidacion && (
          <>
            Fecha liquidación:{" "}
            {moment(x.fechaLiquidacion).format("MMMM Do YYYY, h:mm:ss a")}
          </>
        )}
        <br></br>
        Fecha de prestamo:{" "}
        {moment(x.fechaPrestamo).format("MMMM Do YYYY, h:mm:ss a")}
        <br></br>
        Monto prestado: ${x.monto}
        <br></br>
        Monto a restante:{" "}
        {x.montoDeudor < 1 ? "LIQUIDADO" : `$${x.montoDeudor}`}
        <br></br>
        <p>
          <button
            className="btn btn-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseWidthExample_${x.id}`}
            aria-expanded="false"
            aria-controls={`collapseWidthExample_${x.id}`}
          >
            Parcialidades
          </button>
        </p>
        <div>
          <div
            className="collapse collapse-horizontal"
            id={`collapseWidthExample_${x.id}`}
          >
            <div className="card card-body">
              <ul>
                {parcialidades?.map((x: iParcialidad, index: number) => (
                  <ElementoParcialidad
                    reload={toReload}
                    x={x}
                    index={index}
                  ></ElementoParcialidad>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
};
