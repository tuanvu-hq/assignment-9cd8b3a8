import { usePersonStore } from "@/stores/person-store";
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
      {atoms.list.map((person) => {
        const key = `person-body.${person.data.ID}.${person.__metadata.UUID}`;

        return <PersonTableRow key={key} person={person} />;
      })}
    </TableBody>
  );
};
