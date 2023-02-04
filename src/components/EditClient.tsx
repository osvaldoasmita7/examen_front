import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useClientes } from "../hooks/useClientes";
import { iClients } from "../interfaces";
import { InputCustom } from "../components/InputCustom";
import moment from "moment";

export const EditClient = () => {
  const navigate = useNavigate();

  const [cliente, setCliente] = useState<iClients>({ name: "" });

  const { id } = useParams();
  const { traerCliente, actualizarCliente } = useClientes();
  const getCliente = () => {
    let resp = traerCliente(id || "0");
    if (!resp) return navigate("/");
    setCliente(resp);
  };
  useEffect(() => {
    getCliente();
  }, []);
  const save = (event: any) => {
    event.preventDefault();
    let resp: boolean = actualizarCliente(cliente);
    if (!resp) return;
  };
  const onChangeCliente = (event: any) => {
    setCliente({ ...cliente, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <form onSubmit={save} className="py-3">
        <InputCustom
          name="name"
          label="Id"
          onChange={onChangeCliente}
          value={cliente?.id}
          disabled={true}
        ></InputCustom>
        <InputCustom
          name="name"
          label="Nombre"
          onChange={onChangeCliente}
          value={cliente?.name}
        ></InputCustom>
        <InputCustom
          name="name"
          label="Fecha de creación"
          onChange={onChangeCliente}
          value={moment(cliente?.dateCreated).format("MMMM Do YYYY, h:mm:ss a")}
          disabled={true}
        ></InputCustom>
        <input
          className="btn btn-primary w-100 mt-3"
          type="submit"
          value="Guardar"
        ></input>
      </form>
    </div>
  );
};
