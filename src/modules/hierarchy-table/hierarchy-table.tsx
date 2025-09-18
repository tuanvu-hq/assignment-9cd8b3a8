import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import { TableBody, TableHeader } from "./components";
import { PERSON_TABLE_HEADER } from "./constants";
import { usePersonStore } from "./store";
import type { Person, TableModifiers } from "./types";
import { fakeFetchData$ } from "./utils";

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
