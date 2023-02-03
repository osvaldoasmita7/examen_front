import { useState } from "react";
import { Modal } from "./Modal";
import { InputCustom } from "./InputCustom";
import { iClients } from "../interfaces";
import { useClientes } from "../hooks/useClientes";
interface iProps {
  onChangeCliente?: () => void;
}
const INITIAL_STATE = {
  name: "",
};
export const NuevoCliente = ({ onChangeCliente }: iProps) => {
  const [form, setForm] = useState<iClients>(INITIAL_STATE);
  const { nuevoCliente } = useClientes();
  const onChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const save = (event: any) => {
    event.preventDefault();
    let resp: boolean = nuevoCliente(form);
    if (!resp) return;
    if (onChangeCliente) onChangeCliente();
    resetForm();
  };
  const resetForm = () => {
    setForm(INITIAL_STATE);
  };
  return (
    <div>
      <Modal
        button={<button className="btn btn-primary">Nuevo cliente</button>}
        title="Crear cliente"
      >
        <>
          <form onSubmit={save}>
            <InputCustom
              name="name"
              label="Nombre"
              value={form.name}
              onChange={onChange}
            ></InputCustom>
            <input
              type="submit"
              value={"Enviar"}
              className="btn btn-primary mt-3"
            ></input>
          </form>
        </>
      </Modal>
    </div>
  );
};
