import { Pagos } from "../components/Pagos";
import { Creditos } from "../components/Creditos";
import { EditClient } from "../components/EditClient";
import { Navbar } from "../components/Navbar";
import { TabsCustom } from "../components/TabsCustom";

export const ClienteDetalles = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="col-12 col-md-6 col-lg-4 card p-3 mx-auto my-5 p-3">
        <h1>Cliente</h1>
        <TabsCustom
          tabs={[
            {
              name: "client",
              children: <EditClient></EditClient>,
              text: "Información personal",
            },
            {
              name: "credits",
              children: <Creditos></Creditos>,
              text: "Creditos",
            },
            {
              name: "payments",
              children: <Pagos></Pagos>,
              text: "Pagos",
            },
          ]}
        ></TabsCustom>
      </div>
    </div>
  );
};
