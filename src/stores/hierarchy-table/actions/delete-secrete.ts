import { store } from "@/stores/store";
import type { ID } from "@/types/hierarchy-table/brands";
import type { Person } from "@/types/hierarchy-table/person";
import type { PrimitiveAtom } from "jotai";

export const deleteSecrete = (atom: PrimitiveAtom<Person[]>, payload: ID) => {
  const cloned = [...store.get(atom)];

  cloned.forEach((person) => {
    if (person.children.__type === "1") {
      person.children.records.forEach((nemesis) => {
        if (nemesis.children.__type === "1") {
          nemesis.children.records = nemesis.children.records.filter(
            (secrete) => secrete.data.ID !== payload,
          );
        }
      });
    }
  });

  store.set(atom, cloned);
};
