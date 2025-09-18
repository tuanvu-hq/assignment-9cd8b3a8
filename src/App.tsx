import { useAtomValue } from "jotai";
import { useEffect, useRef } from "react";
import { HierarchyTable } from "./modules/hierarchy-table/hierarchy-table";
import { usePersonStore } from "./modules/hierarchy-table/store";
import { fakeFetchData$ } from "./modules/hierarchy-table/utils";

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
    const data = await fakeFetchData$();

    stores.person.action.setList(data);
  };

  return <HierarchyTable list={atoms.list} />;
};
