import type { ID, Person } from "@/modules/hierarchy-table/types";
import { store } from "@/stores/store";
import type { PrimitiveAtom } from "jotai";

export const deleteSecrete = (atom: PrimitiveAtom<Person[]>, payload: ID) => {
  const cloned = [...store.get(atom)];

  cloned.forEach((person) => {
    if (person.children.__type === "has-children") {
      person.children.records.forEach((nemesis) => {
        if (nemesis.children.__type === "has-children") {
          nemesis.children.records = nemesis.children.records.filter(
            (secrete) => secrete.data.ID !== payload,
          );
        }
      });
    }
  });

  store.set(atom, cloned);
};
