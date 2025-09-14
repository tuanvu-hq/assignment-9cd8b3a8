import type { NemesisRecordChildren } from "@/types/person/nemesis";
import { TableHead, TableHeader, TableRow } from "../ui/table";

type Props = {
  children: NemesisRecordChildren;
};

export const SecreteTableHeader = ({ children }: Props) => {
  return (
    <TableHeader>
      <TableRow className="hover:bg-transparent">
        {[...Object.keys(children.has_secrete.records[0].data), "#1"].map(
          (item) => {
            const key = `secrete-header.${item}`;

            if (item === "#1") {
              return <TableHead key={key}>Delete</TableHead>;
            }

            return <TableHead key={key}>{item}</TableHead>;
          },
        )}
      </TableRow>
    </TableHeader>
  );
};
