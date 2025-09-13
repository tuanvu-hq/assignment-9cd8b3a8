import type { Person } from "@/types/person/person";
import { atom } from "jotai";
import { store } from "./store";

const list = atom<Person[]>([]);

export const usePersonStore = () => {
  return {
    atom: {
      list,
    },
    action: {
      setList,
    },
  };
};

const setList = (payload: Person[]) => {
  store.set(list, payload);
};
