import { usePersonStore } from "@/stores/person-store";
import type { Person } from "@/types/person/person";
import { useAtomValue } from "jotai";
import { ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  TableBody as TableBodyOrigin,
  TableCell,
  TableRow,
} from "../../components/ui/table";
import { generateUUID } from "../../utils/generate-uuid";

export const TableBody = () => {
  const stores = {
    person: usePersonStore(),
  };
  const atoms = {
    list: useAtomValue(stores.person.atom.list),
  };

  return (
    <TableBodyOrigin>
      {atoms.list.map((person) => (
        <TableRow key={generateUUID("1")}>
          {["#1", ...Object.values(person.data), "#2"].map((subItem) => {
            if (subItem === "#1") {
              return DisplaySubItemOne(person);
            }

            if (subItem === "#2") {
              return DisplaySubItemTwo();
            }

            return <TableCell key={generateUUID("1")}>{subItem}</TableCell>;
          })}
        </TableRow>
      ))}
    </TableBodyOrigin>
  );
};

const DisplaySubItemOne = (payload: Person) => {
  const display = () => {
    if (payload.children.type === "1") {
      return (
        <Button className="aspect-square w-4 cursor-pointer" variant="outline">
          <ChevronRight />
        </Button>
      );
    }

    return <span></span>;
  };

  return <TableCell key={generateUUID("1")}>{display()}</TableCell>;
};

const DisplaySubItemTwo = () => {
  return (
    <TableCell key={generateUUID("1")}>
      <Button className="cursor-pointer" variant="outline">
        Delete
      </Button>
    </TableCell>
  );
};
