import type { PersonChildrenModified } from "@/types/person/person";
import { TableBody } from "../ui/table";
import { NemesisTableRow } from "./nemesis-table-row";

type Props = {
  children: PersonChildrenModified;
};

export const NemesisTableBody = ({ children }: Props) => {
  return (
    <TableBody>
      {children.has_nemesis.records.map((record) => {
        const key = `nemesis-body.${record.data.ID}.${record.__metadata.UUID}`;

        return <NemesisTableRow key={key} record={record} />;
      })}
    </TableBody>
  );
};
