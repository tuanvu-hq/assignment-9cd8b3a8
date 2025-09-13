import { cn } from "@/lib/utils";
import { usePersonStore } from "@/stores/person-store";
import type { Person } from "@/types/person/person";
import type { ID } from "@/types/person/person-brands";
import { generateUUID } from "@/utils/generate-uuid";
import { ChevronDown } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { NemesisTableBody } from "../nemesis-table/nemesis-table-body";
import { NemesisTableHeader } from "../nemesis-table/nemesis-table-header";
import { TableLayerLine } from "../table-layer-line";
import { Button } from "../ui/button";
import { Table, TableCell, TableRow } from "../ui/table";

type Props = {
  person: Person;
};

export const PersonTableRow = ({ person }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TableRow key={generateUUID("1")}>
        {["#1", ...Object.values(person.data), "#2"].map((subItem, idx) => {
          if (subItem === "#1") {
            return DisplaySubItemOne({
              person,
              isExpanded,
              setIsExpanded,
            });
          }

          if (subItem === "#2") {
            return DisplaySubItemTwo(person.data.ID);
          }

          if (getDateIndexes(person).includes(idx)) {
            return (
              <TableCell key={generateUUID("1")} className="font-mono">
                {subItem}
              </TableCell>
            );
          }

          return <TableCell key={generateUUID("1")}>{subItem}</TableCell>;
        })}
      </TableRow>
      {person.children.type === "1" && isExpanded && (
        <TableRow className="hover:bg-transparent">
          <TableCell colSpan={Object.keys(person.data).length + 2}>
            <div className="flex py-4 pl-4">
              <TableLayerLine />
              <div>
                <Table className="">
                  <NemesisTableHeader children={person.children} />
                  <NemesisTableBody children={person.children} />
                </Table>
              </div>
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
  if (
    person.children.type === "0" ||
    person.children.has_nemesis.records.length === 0
  ) {
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

const DisplaySubItemTwo = (id: ID) => {
  const stores = {
    person: usePersonStore(),
  };

  return (
    <TableCell key={generateUUID("1")}>
      <Button
        className="hover:border-red-401 cursor-pointer hover:text-red-400"
        variant="outline"
        onClick={() => stores.person.action.deletePerson(id)}
      >
        Delete
      </Button>
    </TableCell>
  );
};

const getDateIndexes = (payload: Person) => {
  return Object.keys(payload.data)
    .map((item, index) => {
      const lookup = ["Born", "In space since"];

      if (!lookup.includes(item)) return 0;

      return index + 1; //  handler #1 index
    })
    .filter((item) => item !== 0);
};
