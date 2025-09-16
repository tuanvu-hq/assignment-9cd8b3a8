import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { Nemesis, Person, Secrete } from "@/types/hierarchy-table/person";
import { generateUUID } from "@/utils/shared/generate-uuid";
import { ChevronDown } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

export const TableRowExpandableCell = ({
  item,
  expandedState,
}: {
  item: Person | Nemesis | Secrete;
  expandedState: [boolean, Dispatch<SetStateAction<boolean>>];
}) => {
  const [isExpanded, setIsExpanded] = expandedState;
  const isChildless = item.__identifier === "secrete";
  const hasNoChildren =
    item.__identifier !== "secrete" && item.children.__type === "0";
  const isEmpty =
    item.__identifier !== "secrete" &&
    item.children.__type === "1" &&
    item.children.records.length === 0;

  if (isChildless || hasNoChildren || isEmpty) {
    return (
      <TableCell key={generateUUID("1")}>
        <span></span>
      </TableCell>
    );
  }

  return (
    <TableCell key={generateUUID("1")}>
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
