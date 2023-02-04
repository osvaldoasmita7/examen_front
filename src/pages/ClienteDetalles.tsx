import { Creditos } from "../components/Creditos";
import { EditClient } from "../components/EditClient";
import { TabsCustom } from "../components/TabsCustom";

export const ClienteDetalles = () => {
  return (
    <div>
      <div className="col-12 col-md-6 col-lg-4 card p-3 mx-auto my-5 p-3">
        <TabsCustom
          tabs={[
            {
              name: "client",
              children: <EditClient></EditClient>,
              text: "Datos de cliente",
            },
            {
              name: "credits",
              children: <Creditos></Creditos>,
              text: "Creditos",
            },
            {
              name: "parcialidades",
              children: <EditClient></EditClient>,
              text: "Parcialidades",
            },
          ]}
        ></TabsCustom>
      </div>
    </div>
  );
};
