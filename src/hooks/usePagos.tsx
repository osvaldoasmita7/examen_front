import moment from "moment";
import { iCredito, iPago, iParcialidad } from "../interfaces";
export const usePagos = () => {
  const traerPagosCliente = (id: string) => {
    let arregloPagosFinal: iPago[] = [];
    let idCliente: number = id ? parseInt(id) : 0;
    // Obtiene valores del almacenamiento
    // Creditos
    let resp: string = localStorage.getItem("credits") || "[]";
    let credits: iCredito[] = JSON.parse(resp);
    // Parcialidades
    let respParcialidades: string =
      localStorage.getItem("parcialities") || "[]";
    let parcialidades: iParcialidad[] = JSON.parse(respParcialidades);
    // Pagos
    let respPagos: string = localStorage.getItem("pagos") || "[]";
    let pagos: iPago[] = JSON.parse(respPagos);
    // Creditos del cliente
    let arrayCredits = credits.filter(
      (x: iCredito) => x.idCliente === idCliente
    );
    arrayCredits.forEach((cred: iCredito) => {
      // Parcialidades de los créditos del cliente
      let arrayParcialities = parcialidades.filter(
        (x: iParcialidad) => x.idCredito === cred.id
      );
      // Pagos de dichas parcialidades
      arrayParcialities.forEach((par: iParcialidad) => {
        let arrayPagos = pagos.filter((x: iPago) => x.idParcialidad === par.id);
        arregloPagosFinal = [...arregloPagosFinal, ...arrayPagos];
      });
    });

    return arregloPagosFinal;
  };

  const nuevoPago = (monto: number, idParcialidad: number) => {
    let pagos: iPago[] = [];
    if (localStorage.getItem("pagos")) {
      let resp: string = localStorage.getItem("pagos") || "[]";
      pagos = JSON.parse(resp);
    }
    let _id: number = pagos[pagos.length > 0 ? pagos.length - 1 : 0]?.id || 0;
    _id++;
    // Crea el pago
    pagos.push({ monto, idParcialidad, id: _id, fecha: moment().format() });
    // Obtiene las parcialidades
    let resp: string = localStorage.getItem("parcialities") || "[]";
    let parcialidades: iParcialidad[] = JSON.parse(resp);
    // busca la parcialidad pagada
    let index: number = parcialidades.findIndex(
      (z: iParcialidad) => z.id === idParcialidad
    );
    if (index < 0) {
      alert("No se encontró la parcialidad, no se hizo ningún pago");
      return false;
    }
    parcialidades[index].montoRestante -= monto;
    if (parcialidades[index].montoRestante === 0)
      parcialidades[index].cubierto = true;
    // Obtiene los créditos
    let respCreditos: string = localStorage.getItem("credits") || "[]";
    let creditos: iCredito[] = JSON.parse(respCreditos);
    // busca el crédito para aplicarle la parcialidad
    let indexCredito: number = creditos.findIndex(
      (z: iCredito) => z.id === parcialidades[index].idCredito
    );
    if (indexCredito < 0) {
      alert("No se encontró el crédito asignado, no se hizo ningún pago");
      return false;
    }
    debugger;
    creditos[indexCredito].montoDeudor -= monto;
    if (creditos[indexCredito].montoDeudor === 0)
      creditos[indexCredito].fechaLiquidacion = moment().format();
    // Guarda en almacenamiento del navegador
    localStorage.setItem("pagos", JSON.stringify(pagos));
    localStorage.setItem("parcialities", JSON.stringify(parcialidades));
    localStorage.setItem("credits", JSON.stringify(creditos));
    // Avisa que se creó
    alert(
      "Pago registrado con éxito, se aplicó el pago a la parcialidad y al crédito"
    );
    return true;
  };
  return { nuevoPago, traerPagosCliente };
};
