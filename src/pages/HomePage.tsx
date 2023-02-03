import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Table } from "../components/Table";
import { iClients } from "../interfaces";
import { NuevoCliente } from "../components/NuevoCliente";
import { useClientes } from "../hooks/useClientes";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const { eliminarCliente } = useClientes();
  const [data, setData] = useState<iClients[]>([]);
  useEffect(() => {
    onChangeCliente();
  }, []);
  const onChangeCliente = () => {
    let resp = localStorage.getItem("clients") || "[]";
    let clients: iClients[] = JSON.parse(resp);
    setData([...clients]);
  };
  const deleteClient = (id: number) => {
    let resp: boolean = eliminarCliente(id);
    if (!resp) return;
    onChangeCliente();
  };
  const showMore = (id: number) => {
    debugger;
    return navigate(`/client/${id}`);
  };
  return (
    <div>
      <Navbar></Navbar>
      <NuevoCliente onChangeCliente={onChangeCliente}></NuevoCliente>

      <Table
        columns={[
          {
            name: "Id",
            selector: (row: any) => row.id,
            sortable: true,
          },
          {
            name: "Nombre",
            selector: (row: any) => row.name,
            sortable: true,
          },
          {
            name: "Fecha creación",
            selector: (row: any) => row.dateCreated,
            sortable: true,
          },
          {
            name: "Más",
            selector: (row: any) => row.options,
          },
        ]}
        data={data}
        buttons={true}
        onDeleteFunction={deleteClient}
        onMoreFunction={showMore}
      ></Table>
    </div>
  );
};
