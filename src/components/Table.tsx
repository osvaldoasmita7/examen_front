import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component/dist/src/DataTable/types";

interface iProps {
  columns: TableColumn<any>[];
  data: any[];
  buttons?: boolean;
  onDeleteFunction?: (e: any) => any;
  onMoreFunction?: (e: any) => any;
}

export const Table = ({
  columns,
  data,
  buttons,
  onDeleteFunction,
  onMoreFunction,
}: iProps) => {
  const mapButtonEdit = (data: any[]) => {
    data.map((x) => {
      x.options = (
        <div>
          <button
            onClick={() => (onMoreFunction ? onMoreFunction(x.id) : () => {})}
          >
            Más info
          </button>
          <button
            onClick={() =>
              onDeleteFunction ? onDeleteFunction(x.id) : () => {}
            }
          >
            Eliminar
          </button>
        </div>
      );
    });
  };
  useEffect(() => {
    if (buttons) mapButtonEdit(data);
  }, [mapButtonEdit, buttons]);

  return <DataTable columns={columns} data={data} />;
};
