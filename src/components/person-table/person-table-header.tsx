import { usePersonStore } from "@/stores/person-store";
import { generateUUID } from "@/utils/generate-uuid";
import { useAtomValue } from "jotai";
import { TableHead, TableHeader, TableRow } from "../ui/table";

export const PersonTableHeader = () => {
  const stores = {
    person: usePersonStore(),
  };
  const atoms = {
    list: useAtomValue(stores.person.atom.list),
  };

  return (
    <TableHeader>
      <TableRow className="hover:bg-transparent">
        {["#1", ...Object.keys(atoms.list[0].data), "Delete"].map((item) => {
          if (item === "#1") {
            return <TableHead key={generateUUID("1")}></TableHead>;
          }

          return <TableHead key={generateUUID("1")}>{item}</TableHead>;
        })}
      </TableRow>
    </TableHeader>
  );
};
