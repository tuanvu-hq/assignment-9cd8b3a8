import { SECRETE_TABLE_HEADER } from "@/constants/table-constants";
import { TableHead, TableHeader, TableRow } from "../ui/table";

export const SecreteTableHeader = () => {
  return (
    <TableHeader>
      <TableRow className="hover:bg-transparent">
        {[...SECRETE_TABLE_HEADER, "#1"].map((item) => {
          const key = `secrete-header.${item}`;

          if (item === "#1") {
            return <TableHead key={key}>Delete</TableHead>;
          }

          return <TableHead key={key}>{item}</TableHead>;
        })}
      </TableRow>
    </TableHeader>
  );
};
