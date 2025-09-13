import { useAtomValue } from "jotai";
import { useEffect, useRef } from "react";
import { TableBody } from "./components/table/table-body";
import { TableHeader } from "./components/table/table-header";
import { Table } from "./components/ui/table";
import { usePersonStore } from "./stores/person-store";
import { fetchData$ } from "./utils/fetch-data";

export const App = () => {
  const stores = {
    person: usePersonStore(),
  };
  const atoms = {
    list: useAtomValue(stores.person.atom.list),
  };

  const init = useRef(false);

  useEffect(() => {
    if (init.current) return;

    init.current = true;

    fetchAndSetData$();
  }, []);

  const fetchAndSetData$ = async () => {
    const data = await fetchData$();

    stores.person.action.setList(data);
  };

  if (atoms.list.length === 0) {
    return (
      <div className="grid h-screen place-items-center p-10">
        <p className="text-4xl">List is empty &#128557;</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
    </div>
  );
};
