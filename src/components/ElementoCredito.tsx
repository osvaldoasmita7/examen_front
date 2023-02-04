import { useEffect, useState } from "react";
import { iCredito } from "../interfaces/credits.interface";
import moment from "moment";
import { iParcialidad } from "../interfaces";
import { ElementoParcialidad } from "./ElementoParcialidad";
export const ElementoCredito = (x: iCredito) => {
  let [parcialidades, setParcialidades] = useState<iParcialidad[]>();

  useEffect(() => {
    let resp = localStorage.getItem("parcialities") || "[]";
    let parcialities = JSON.parse(resp);
    debugger;
    parcialities = parcialities?.filter(
      (y: iParcialidad) => y.idCredito === x.id
    );
    setParcialidades(parcialities);
  }, []);

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
        Monto a restante: ${x.montoDeudor}
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
