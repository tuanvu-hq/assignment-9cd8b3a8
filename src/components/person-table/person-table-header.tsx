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
        {["#1", ...Object.keys(atoms.list[0].data), "#2"].map((item) => {
          if (item === "#1") {
            return <TableHead key={generateUUID("1")}></TableHead>;
          }

          if (item === "#2") {
            return <TableHead key={generateUUID("1")}>Delete</TableHead>;
          }

          return <TableHead key={generateUUID("1")}>{item}</TableHead>;
        })}
      </TableRow>
    </TableHeader>
  );
};
