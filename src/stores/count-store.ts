import { atom } from "jotai";
import { store } from "./store";

const count = atom(0);

export const useCounteStore = () => {
  return {
    atom: {
      count,
    },
    action: {
      increase,
    },
  };
};

const increase = () => {
  const c = store.get(count);

  store.set(count, c + 1);
};
