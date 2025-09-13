import type { PersonChildren } from "@/types/person/person";
import { generateUUID } from "@/utils/generate-uuid";
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
            if (item === "#1") {
              return <TableHead key={generateUUID("1")}></TableHead>;
            }

            if (item === "#2") {
              return <TableHead key={generateUUID("1")}>Delete</TableHead>;
            }

            return <TableHead key={generateUUID("1")}>{item}</TableHead>;
          },
        )}
      </TableRow>
    </TableHeader>
  );
};
