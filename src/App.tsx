import { useAtomValue } from "jotai";
import { useEffect, useRef } from "react";
import { Button } from "./components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { usePersonStore } from "./stores/person-store";
import { fetchData$ } from "./utils/fetch-data";
import { generateUUID } from "./utils/generate-uuid";

export const App = () => {
  const stores = {
    person: usePersonStore(),
  };
  const atoms = {
    list: useAtomValue(stores.person.atom.list),
  };

  const init = useRef(false);

  useEffect(() => {
    if (init.current) return;

    init.current = true;

    fetchAndSetData$();
  }, []);

  const fetchAndSetData$ = async () => {
    const data = await fetchData$();

    stores.person.action.setList(data);
  };

  if (atoms.list.length === 0) {
    return (
      <div className="grid h-screen place-items-center p-10">
        <p className="text-4xl">List is empty &#128557;</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {[...Object.keys(atoms.list[0].data), "Delete"].map((item) => {
              return <TableHead key={generateUUID("1")}>{item}</TableHead>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {atoms.list.map((item) => (
            <TableRow key={generateUUID("1")}>
              {[...Object.values(item.data), "#1"].map((subItem) => {
                if (subItem === "#1") {
                  return (
                    <TableCell key={generateUUID("1")}>
                      <Button className="cursor-pointer">Delete</Button>
                    </TableCell>
                  );
                }

                return <TableCell key={generateUUID("1")}>{subItem}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
