import { atom } from "jotai";
import type { ID, Person } from "../../types";
import { deleteNemesis } from "./actions/delete-nemesis";
import { deletePerson } from "./actions/delete-person";
import { deleteSecrete } from "./actions/delete-secrete";
import { setList } from "./actions/set-list";

const list = atom<Person[]>([]);

export const usePersonStore = () => {
  return {
    atom: {
      list,
    },
    action: {
      setList: (payload: Person[]) => setList(list, payload),
      deletePerson: (payload: ID) => deletePerson(list, payload),
      deleteNemesis: (payload: ID) => deleteNemesis(list, payload),
      deleteSecrete: (payload: ID) => deleteSecrete(list, payload),
    },
  };
};
