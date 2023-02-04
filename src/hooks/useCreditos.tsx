import { iCredito } from "../interfaces";

export const useCreditos = () => {
  const nuevoCredito = (data: iCredito) => {
    let credits: iCredito[] = [];
    if (localStorage.getItem("credits")) {
      let resp: string = localStorage.getItem("credits") || "[]";
      credits = JSON.parse(resp);
    }
    let _id: number =
      credits[credits.length > 0 ? credits.length - 1 : 0]?.id || 0;
    _id++;
    credits.push({ ...data, id: _id });
    localStorage.setItem("credits", JSON.stringify(credits));
    alert("Credito creado con éxito, creando fechas de parcialidades");
    return { ok: true, id: _id };
  };
  const traerCreditosCliente = (id: string) => {
    let resp: string = localStorage.getItem("credits") || "[]";
    let credits: iCredito[] = JSON.parse(resp);
    let idCliente: number = id ? parseInt(id) : 0;
    let array = credits.filter((x: iCredito) => x.idCliente === idCliente);
    return array;
  };
  return { nuevoCredito, traerCreditosCliente };
};
