import { usePersonStore } from "@/stores/person-store";
import { generateUUID } from "@/utils/generate-uuid";
import { useAtomValue } from "jotai";
import {
  TableHead,
  TableHeader as TableHeaderOrigin,
  TableRow,
} from "../../components/ui/table";

export const TableHeader = () => {
  const stores = {
    person: usePersonStore(),
  };
  const atoms = {
    list: useAtomValue(stores.person.atom.list),
  };

  return (
    <TableHeaderOrigin>
      <TableRow className="hover:bg-transparent">
        {["#1", ...Object.keys(atoms.list[0].data), "Delete"].map((item) => {
          if (item === "#1") {
            return <TableHead key={generateUUID("1")}></TableHead>;
          }

          return <TableHead key={generateUUID("1")}>{item}</TableHead>;
        })}
      </TableRow>
    </TableHeaderOrigin>
  );
};
