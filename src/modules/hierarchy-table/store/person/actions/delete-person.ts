import type { ID, Person } from "@/modules/hierarchy-table/types";
import { store } from "@/stores/store";
import type { PrimitiveAtom } from "jotai";

export const deletePerson = (atom: PrimitiveAtom<Person[]>, payload: ID) => {
  const cloned = [...store.get(atom)];
  const filtered = cloned.filter((person) => person.data.ID !== payload);

  store.set(atom, filtered);
};
