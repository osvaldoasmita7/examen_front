import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { iCredito } from "../interfaces/credits.interface";

import { Modal } from "./Modal";
import { ElementoCredito } from "./ElementoCredito";
import { FormCredito } from "./FormCredito";
import { useCreditos } from "../hooks/useCreditos";

interface iProps {
  id: string | number;
  idCliente: number;
  numeroPagos: number;
  periodoDias: number;
}

export const Creditos = () => {
  const { id } = useParams();
  const [creditos, setCreditos] = useState<iCredito[]>([]);
  const { traerCreditosCliente } = useCreditos();
  const getData = () => {
    debugger;
    let resp = traerCreditosCliente(id || "");
    setCreditos([...resp]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Modal
        button={<button className="btn btn-primary mt-4">Nuevo</button>}
        title="Nuevo crédito"
        key={1}
      >
        <FormCredito idCliente={id} reload={getData}></FormCredito>
      </Modal>

      {creditos.length === 0 && (
        <h3 className="my-3">No hay créditos registrados</h3>
      )}
      {creditos.map((x: iCredito) => (
        <ElementoCredito x={x} reload={getData}></ElementoCredito>
      ))}
    </div>
  );
};
