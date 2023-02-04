import { iParcialidad } from "../interfaces";
import moment from "moment";
import { Modal } from "./Modal";
import { FormPago } from "./FormPago";
interface iProps {
  x: iParcialidad;
  index: number;
  reload?: () => void;
}
export const ElementoParcialidad = ({ x, index, reload }: iProps) => {
  console.log("reloadparcialidad", reload);
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
      <Modal
        button={
          !x.cubierto && <button className="btn btn-success">Pagar</button>
        }
        title="Realizar pago"
      >
        <FormPago
          montoAPagar={x.montoApagar}
          idParcialidad={x.id}
          reload={reload}
        ></FormPago>
      </Modal>
    </li>
  );
};
