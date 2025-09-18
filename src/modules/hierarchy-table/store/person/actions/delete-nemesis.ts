import type { ID, Person } from "@/modules/hierarchy-table/types";
import { store } from "@/stores/store";
import type { PrimitiveAtom } from "jotai";

export const deleteNemesis = (atom: PrimitiveAtom<Person[]>, payload: ID) => {
  const cloned = [...store.get(atom)];

  cloned.forEach((person) => {
    if (person.children.__type === "has-children") {
      person.children.records = person.children.records.filter(
        (nemesis) => nemesis.data.ID !== payload,
      );
    }
  });

  store.set(atom, cloned);
};
