import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { iCredito } from "../interfaces/credits.interface";

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
      {pagos.length === 0 && <h3 className="my-3">No hay pagos registrados</h3>}
      {pagos.map((x: iPago) => {
        debugger;
        return (
          <h1>
            {x.monto} {x.fecha}
          </h1>
        );
      })}
      {/* // <ElementoCredito x={x} reload={getData}></ElementoCredito> */}
    </div>
  );
};
