import { cn } from "@/lib/utils";
import type { Person } from "@/types/person/person";
import { generateUUID } from "@/utils/generate-uuid";
import { ChevronDown } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";

type Props = {
  person: Person;
};

export const PersonTableRow = ({ person }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TableRow key={generateUUID("1")}>
        {["#1", ...Object.values(person.data), "#2"].map((subItem) => {
          if (subItem === "#1") {
            return DisplaySubItemOne({ person, isExpanded, setIsExpanded });
          }

          if (subItem === "#2") {
            return DisplaySubItemTwo();
          }

          return <TableCell key={generateUUID("1")}>{subItem}</TableCell>;
        })}
      </TableRow>
      {person.children.type === "1" && isExpanded && (
        <TableRow className="hover:bg-transparent">
          <TableCell>
            <div className="flex pl-4">
              <div className="bg-border h-50 w-px"></div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

const DisplaySubItemOne = ({
  person,
  isExpanded,
  setIsExpanded,
}: {
  person: Person;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
  if (person.children.type === "0") {
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

const DisplaySubItemTwo = () => {
  return (
    <TableCell key={generateUUID("1")}>
      <Button
        className="hover:border-red-401 cursor-pointer hover:text-red-400"
        variant="outline"
      >
        Delete
      </Button>
    </TableCell>
  );
};
