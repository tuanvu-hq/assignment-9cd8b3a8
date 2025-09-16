import { PERSON_TABLE_HEADER } from "@/constants/hierarchy-table/header";
import { usePersonStore } from "@/stores/hierarchy-table/person";
import type { TableModifiers } from "@/types/hierarchy-table/header";
import type { Person } from "@/types/hierarchy-table/person";
import { fakeFetchData$ } from "@/utils/hierarchy-table/fake-fetch-data";
import { Button } from "../ui/button";
import { Table } from "../ui/table";
import { TableBody } from "./base/table-body";
import { TableHeader } from "./base/table-header";

type Props = {
  list: Person[];
};

export const HierarchyTable = ({ list }: Props) => {
  const stores = {
    person: usePersonStore(),
  };

  const indentifier = "person";
  const modifiers: TableModifiers<boolean> = {
    expandable: true,
    deletable: true,
  };

  const fetchAndResetData$ = async () => {
    const data = await fakeFetchData$();

    stores.person.action.setList(data);
  };

  if (list.length === 0) {
    return (
      <div className="grid h-screen place-items-center p-10">
        <div className="flex flex-col items-center gap-10">
          <p className="text-4xl" data-type="empty-list-message">
            List is empty &#128557;
          </p>
          <Button className="w-fit cursor-pointer" onClick={fetchAndResetData$}>
            Reset list
          </Button>
        </div>
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
