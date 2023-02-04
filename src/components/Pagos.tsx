import { useEffect, useState } from "react";
import moment from "moment";

import { useParams } from "react-router-dom";

import { usePagos } from "../hooks/usePagos";
import { iPago } from "../interfaces";

export const Pagos = () => {
  const { id } = useParams();
  const [pagos, setPagos] = useState<iPago[]>([]);
  const { traerPagosCliente } = usePagos();
  const getData = () => {
    debugger;
    let resp = traerPagosCliente(id || "");
    setPagos([...resp]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {pagos.length === 0 && (
        <h3 className="my-3">
          No hay pagos registrados, si ya realizaste un pago intenta refrescando
          el navegador
        </h3>
      )}
      {pagos.map((x: iPago) => {
        debugger;
        return (
          <div className="mt-4">
            <label>
              Fecha:{moment(x.fecha).format("MMMM Do YYYY, h:mm:ss a")}
              <br></br>
              Monto: ${x.monto}
            </label>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};
