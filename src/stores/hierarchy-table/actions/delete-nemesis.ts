import { store } from "@/stores/store";
import type { ID } from "@/types/hierarchy-table/brands";
import type { Person } from "@/types/hierarchy-table/person";
import type { PrimitiveAtom } from "jotai";

export const deleteNemesis = (atom: PrimitiveAtom<Person[]>, payload: ID) => {
  const cloned = [...store.get(atom)];

  cloned.forEach((person) => {
    if (person.children.__type === "1") {
      person.children.records = person.children.records.filter(
        (nemesis) => nemesis.data.ID !== payload,
      );
    }
  });

  store.set(atom, cloned);
};
