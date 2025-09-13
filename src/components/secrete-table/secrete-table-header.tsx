import type { NemesisChildren } from "@/types/record";
import { generateUUID } from "@/utils/generate-uuid";
import { TableHead, TableHeader, TableRow } from "../ui/table";

type Props = {
  children: NemesisChildren;
};

export const SecreteTableHeader = ({ children }: Props) => {
  return (
    <TableHeader>
      <TableRow className="hover:bg-transparent">
        {[...Object.keys(children.has_secrete.records[0].data), "#1"].map(
          (item) => {
            if (item === "#1") {
              return <TableHead key={generateUUID("1")}>Delete</TableHead>;
            }

            return <TableHead key={generateUUID("1")}>{item}</TableHead>;
          },
        )}
      </TableRow>
    </TableHeader>
  );
};
