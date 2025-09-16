import { Table, TableCell, TableRow } from "@/components/ui/table";
import {
  NEMESIS_TABLE_HEADER,
  SECRETE_TABLE_HEADER,
} from "@/constants/hierarchy-table/header";
import { cn } from "@/lib/utils";
import type {
  NemesisTableHeader,
  SecreteTableHeader,
  TableModifiers,
} from "@/types/hierarchy-table/header";
import type { Nemesis, Person, Secrete } from "@/types/hierarchy-table/person";
import { TableBody } from "./table-body";
import { TableHeader } from "./table-header";

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
  const identifier = item.__identifier;
  let headers: NemesisTableHeader[] | SecreteTableHeader[] = [];

  {
    if (item.__identifier === "person") headers = NEMESIS_TABLE_HEADER;
    if (item.__identifier === "nemesis") headers = SECRETE_TABLE_HEADER;
  }

  if (
    !isExpanded ||
    !modifiers.expandable ||
    item.__identifier === "secrete" ||
    item.children.__type === "no-children" ||
    (item.children.__type === "has-children" &&
      item.children.records.length === 0)
  )
    return <></>;

  return (
    <TableRow className="hover:bg-transparent">
      <TableCell colSpan={values.length}>
        <div className="relative flex py-8 pl-4">
          <div className="relative flex w-full">
            <div className="w-8"></div>
            <Table
              className={cn(
                "bg-background relative z-10 rounded border-l-[2px]",
                {
                  "w-1/3": item.__identifier === "person",
                  "w-fit": item.__identifier === "nemesis",
                },
              )}
            >
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

            <HorizontalLine />
          </div>

          <VerticalLine />
        </div>
      </TableCell>
    </TableRow>
  );
};

const HorizontalLine = () => {
  return <div className="bg-border absolute top-1/2 left-0 h-[2px] w-8"></div>;
};

const VerticalLine = () => {
  return <div className="bg-border absolute top-0 left-4 h-1/2 w-[2px]"></div>;
};
