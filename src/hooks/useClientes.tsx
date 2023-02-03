import { iClients } from "../interfaces";

export const useClientes = () => {
  const nuevoCliente = (data: iClients) => {
    let clients: iClients[] = [];
    if (localStorage.getItem("clients")) {
      let resp: string = localStorage.getItem("clients") || "[]";
      clients = JSON.parse(resp);
      let find: any = clients.find((x: iClients) => x.name === data.name);
      if (find) {
        alert("El cliente ya existe");
        return false;
      }
    }
    let _id: number =
      clients[clients.length > 0 ? clients.length - 1 : 0]?.id || 0;
    _id++;
    clients.push({ ...data, dateCreated: "01-01-2001 00:00:00", id: _id });
    localStorage.setItem("clients", JSON.stringify(clients));
    alert("Cliente creado con éxito");
    return true;
  };
  const eliminarCliente = (id: number) => {
    let clients: iClients[] = [];
    if (localStorage.getItem("clients")) {
      let resp: string = localStorage.getItem("clients") || "[]";
      clients = JSON.parse(resp);
    }
    let index: number = clients.findIndex((x: iClients) => x.id === id);
    if (index < 0) {
      alert("El cliente no existe");
      return false;
    }
    clients.splice(index, 1);
    localStorage.setItem("clients", JSON.stringify(clients));
    alert("Cliente eliminado con éxito");
    return true;
  };
  return { nuevoCliente, eliminarCliente };
};
