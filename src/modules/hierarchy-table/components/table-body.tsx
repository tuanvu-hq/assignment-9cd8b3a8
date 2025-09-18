import { TableBody as UiTableBody } from "@/components/ui/table";
import type { Nemesis, Person, Secrete, TableModifiers } from "../types";
import { TableRow } from "./table-row";

type Props = {
  identifier: string;
  list: Person[] | Nemesis[] | Secrete[];
  modifiers: Partial<TableModifiers<boolean>>;
};

export const TableBody = ({ identifier, list, modifiers }: Props) => {
  return (
    <UiTableBody data-identifier="hierarchy-table-body">
      {list.map((item) => {
        const uuid = item.__identifier === "person" ? item.__metadata.uuid : "";
        const key = `${identifier}-body.${item.data.ID}.${uuid}`;

        return <TableRow key={key} item={item} modifiers={modifiers} />;
      })}
    </UiTableBody>
  );
};
