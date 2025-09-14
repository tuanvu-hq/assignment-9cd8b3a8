import { PERSON_TABLE_HEADER } from "@/constants/table-constants";
import { TableHead, TableHeader, TableRow } from "../ui/table";

export const PersonTableHeader = () => {
  return (
    <TableHeader>
      <TableRow className="hover:bg-transparent">
        {["#1", ...PERSON_TABLE_HEADER, "#2"].map((item) => {
          const key = `person-header.${item}`;

          if (item === "#1") {
            return <TableHead key={key}></TableHead>;
          }

          if (item === "#2") {
            return <TableHead key={key}>Delete</TableHead>;
          }

          return <TableHead key={key}>{item}</TableHead>;
        })}
      </TableRow>
    </TableHeader>
  );
};
