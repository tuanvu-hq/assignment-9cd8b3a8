import type { Person } from "@/modules/hierarchy-table/types";
import { store } from "@/stores/store";
import type { PrimitiveAtom } from "jotai";

export const setList = (atom: PrimitiveAtom<Person[]>, payload: Person[]) => {
  store.set(atom, payload);
};
