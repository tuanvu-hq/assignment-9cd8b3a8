import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { generateUUID } from "@/utils";
import { ChevronDown } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import type { Nemesis, Person, Secrete } from "../types";

export const TableRowExpandableCell = ({
  item,
  expandedState,
}: {
  item: Person | Nemesis | Secrete;
  expandedState: [boolean, Dispatch<SetStateAction<boolean>>];
}) => {
  const [isExpanded, setIsExpanded] = expandedState;
  const hasNoChildren = item.children.__type === "no-children";
  const isEmpty =
    item.children.__type === "has-children" &&
    item.children.records.length === 0;

  if (hasNoChildren || isEmpty) {
    return (
      <TableCell key={generateUUID("1")}>
        <span></span>
      </TableCell>
    );
  }

  return (
    <TableCell key={generateUUID("1")} data-type="hierarchy-table-expand-cell">
      <Button
        className={cn(
          "aspect-square w-5 cursor-pointer hover:border-blue-500 hover:text-blue-500",
          {
            "rotate-180": isExpanded,
          },
        )}
        variant="outline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ChevronDown />
      </Button>
    </TableCell>
  );
};
