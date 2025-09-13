import { usePersonStore } from "@/stores/person-store";
import { generateUUID } from "@/utils/generate-uuid";
import { useAtomValue } from "jotai";
import { TableBody } from "../ui/table";
import { PersonTableRow } from "./person-table-row";

export const PersonTableBody = () => {
  const stores = {
    person: usePersonStore(),
  };
  const atoms = {
    list: useAtomValue(stores.person.atom.list),
  };

  return (
    <TableBody>
      {atoms.list.map((person) => (
        <PersonTableRow key={generateUUID("1")} person={person} />
      ))}
    </TableBody>
  );
};
