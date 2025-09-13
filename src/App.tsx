import { useAtomValue } from "jotai";
import { Button } from "./components/ui/button";
import { useCounteStore } from "./stores/count-store";

export const App = () => {
  const stores = {
    count: useCounteStore(),
  };
  const atoms = {
    count: useAtomValue(stores.count.atom.count),
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>{atoms.count}</p>
      <Button onClick={stores.count.action.increase}>Increase</Button>
    </>
  );
};
