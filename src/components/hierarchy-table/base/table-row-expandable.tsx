import { Table, TableCell, TableRow } from "@/components/ui/table";
import {
  NEMESIS_TABLE_HEADER,
  SECRETE_TABLE_HEADER,
} from "@/constants/hierarchy-table/header";
import type {
  NemesisTableHeader,
  SecreteTableHeader,
  TableModifiers,
} from "@/types/hierarchy-table/header";
import type { Nemesis, Person, Secrete } from "@/types/hierarchy-table/person";
import { TableBody } from "./table-body";
import { TableHeader } from "./table-header";
import { TableLayerLine } from "./table-layer-line";

type Props = {
  item: Person | Nemesis | Secrete;
  values: string[];
  modifiers: Partial<TableModifiers<boolean>>;
  expandedState: [boolean, null];
};

export const TableRowExpandable = ({
  item,
  values,
  modifiers,
  expandedState,
}: Props) => {
  const [isExpanded, _] = expandedState;
  const identifier = "nemesis";
  let headers: NemesisTableHeader[] | SecreteTableHeader[] = [];

  if (item.__identifier === "person") headers = NEMESIS_TABLE_HEADER;
  if (item.__identifier === "nemesis") headers = SECRETE_TABLE_HEADER;

  if (!modifiers.expandable) return <></>;
  if (item.__identifier === "secrete") return <></>;
  if (item.children.__type === "0") return <></>;
  if (item.children.__type === "1" && item.children.records.length === 0) {
    return <></>;
  }
  if (!isExpanded) return <></>;

  return (
    <TableRow className="hover:bg-transparent">
      <TableCell colSpan={values.length}>
        <div className="flex py-4 pl-4">
          <TableLayerLine />
          <div>
            <Table>
              <TableHeader
                identifier={identifier}
                list={headers}
                modifiers={modifiers}
              />
              <TableBody
                identifier={identifier}
                list={item.children.records}
                modifiers={modifiers}
              />
            </Table>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
};
