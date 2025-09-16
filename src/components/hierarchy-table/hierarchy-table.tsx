import { PERSON_TABLE_HEADER } from "@/constants/hierarchy-table/header";
import type { TableModifiers } from "@/types/hierarchy-table/header";
import type { Person } from "@/types/hierarchy-table/person";
import { Table } from "../ui/table";
import { TableBody } from "./base/table-body";
import { TableHeader } from "./base/table-header";

type Props = {
  list: Person[];
};

export const HierarchyTable = ({ list }: Props) => {
  const indentifier = "person";
  const modifiers: TableModifiers<boolean> = {
    expandable: true,
    deletable: true,
  };

  if (list.length === 0) {
    return (
      <div className="grid h-screen place-items-center p-10">
        <p className="text-4xl">List is empty &#128557;</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <Table>
        <TableHeader
          identifier={indentifier}
          list={PERSON_TABLE_HEADER}
          modifiers={modifiers}
        />
        <TableBody identifier={indentifier} list={list} modifiers={modifiers} />
      </Table>
    </div>
  );
};
