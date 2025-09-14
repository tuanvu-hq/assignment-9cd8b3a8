import type { PersonModified } from "@/types/person/person";
import type { ID } from "@/types/person/person-brands";
import { atom } from "jotai";
import { store } from "./store";

const list = atom<PersonModified[]>([]);

export const usePersonStore = () => {
  return {
    atom: {
      list,
    },
    action: {
      setList,
      deletePerson,
      deleteNemesis,
      deleteSecrete,
    },
  };
};

const setList = (payload: PersonModified[]) => {
  store.set(list, payload);
};

const deletePerson = (payload: ID) => {
  const cloned = [...store.get(list)];

  const filtered = cloned.filter((person) => person.data.ID !== payload);

  store.set(list, filtered);
};

const deleteNemesis = (payload: ID) => {
  const cloned = [...store.get(list)];

  cloned.forEach((person) => {
    if (person.__type === "1") {
      person.children.has_nemesis.records =
        person.children.has_nemesis.records.filter(
          (nemesis) => nemesis.data.ID !== payload,
        );
    }
  });

  store.set(list, cloned);
};

const deleteSecrete = (payload: ID) => {
  const cloned = [...store.get(list)];

  cloned.forEach((person) => {
    if (person.__type === "1") {
      person.children.has_nemesis.records.forEach((nemesis) => {
        if (nemesis.__type === "1") {
          nemesis.children.has_secrete.records =
            nemesis.children.has_secrete.records.filter(
              (secrete) => secrete.data.ID !== payload,
            );
        }
      });
    }
  });

  store.set(list, cloned);
};
