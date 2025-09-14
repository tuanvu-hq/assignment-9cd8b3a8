import type { PersonChildren } from "@/types/person/person";
import { TableHead, TableHeader, TableRow } from "../ui/table";

type Props = {
  children: PersonChildren;
};

export const NemesisTableHeader = ({ children }: Props) => {
  return (
    <TableHeader>
      <TableRow className="hover:bg-transparent">
        {["#1", ...Object.keys(children.has_nemesis.records[0].data), "#2"].map(
          (item) => {
            const key = `nemesis-header.${item}`;

            if (item === "#1") {
              return <TableHead key={key}></TableHead>;
            }

            if (item === "#2") {
              return <TableHead key={key}>Delete</TableHead>;
            }

            return <TableHead key={key}>{item}</TableHead>;
          },
        )}
      </TableRow>
    </TableHeader>
  );
};
