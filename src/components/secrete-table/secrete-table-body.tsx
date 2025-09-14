import type { NemesisRecordChildren } from "@/types/person/nemesis";
import { TableBody } from "../ui/table";
import { SecreteTableRow } from "./secrete-table-row";

type Props = {
  children: NemesisRecordChildren;
};

export const SecreteTableBody = ({ children }: Props) => {
  return (
    <TableBody>
      {children.has_secrete.records.map((record) => {
        const key = `secrete-body.${record.data.ID}`;

        return <SecreteTableRow key={key} record={record} />;
      })}
    </TableBody>
  );
};
