import type { PersonChildren } from "@/types/person/person";
import { generateUUID } from "@/utils/generate-uuid";
import { TableBody } from "../ui/table";
import { NemesisTableRow } from "./nemesis-table-row";

type Props = {
  children: PersonChildren;
};

export const NemesisTableBody = ({ children }: Props) => {
  return (
    <TableBody>
      {children.has_nemesis.records.map((record) => (
        <NemesisTableRow key={generateUUID("1")} record={record} />
      ))}
    </TableBody>
  );
};
