import { store } from "@/stores/store";
import type { Person } from "@/types/hierarchy-table/person";
import type { PrimitiveAtom } from "jotai";

export const setList = (atom: PrimitiveAtom<Person[]>, payload: Person[]) => {
  store.set(atom, payload);
};
