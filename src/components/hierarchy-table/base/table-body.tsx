import { TableBody as UiTableBody } from "@/components/ui/table";
import type { TableModifiers } from "@/types/hierarchy-table/header";
import type { Nemesis, Person, Secrete } from "@/types/hierarchy-table/person";
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
        const uuid = item.__identifier === "person" ? item.__metadata.UUID : "";
        const key = `${identifier}-body.${item.data.ID}.${uuid}`;

        return <TableRow key={key} item={item} modifiers={modifiers} />;
      })}
    </UiTableBody>
  );
};
