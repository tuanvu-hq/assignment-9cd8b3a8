import type { NemesisChildren } from "@/types/record";
import { generateUUID } from "@/utils/generate-uuid";
import { TableBody } from "../ui/table";
import { SecreteTableRow } from "./secrete-table-row";

type Props = {
  children: NemesisChildren;
};

export const SecreteTableBody = ({ children }: Props) => {
  return (
    <TableBody>
      {children.has_secrete.records.map((record) => (
        <SecreteTableRow key={generateUUID("1")} record={record} />
      ))}
    </TableBody>
  );
};
