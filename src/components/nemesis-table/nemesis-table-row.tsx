import { cn } from "@/lib/utils";
import { usePersonStore } from "@/stores/person-store";
import type { ID } from "@/types/person/person-brands";
import type { NemesisRecord } from "@/types/record";
import { generateUUID } from "@/utils/generate-uuid";
import { ChevronDown } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { SecreteTableBody } from "../secrete-table/secrete-table-body";
import { SecreteTableHeader } from "../secrete-table/secrete-table-header";
import { TableLayerLine } from "../table-layer-line";
import { Button } from "../ui/button";
import { Table, TableCell, TableRow } from "../ui/table";

type Props = {
  record: NemesisRecord;
};

export const NemesisTableRow = ({ record }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TableRow key={generateUUID("1")}>
        {["#1", ...Object.values(record.data), "#2"].map((subItem, idx) => {
          if (subItem === "#1") {
            return DisplaySubItemOne({
              record,
              isExpanded,
              setIsExpanded,
            });
          }

          if (subItem === "#2") {
            return DisplaySubItemTwo(record.data.ID);
          }

          if (getDateIndexes(record).includes(idx)) {
            return (
              <TableCell key={generateUUID("1")} className="font-mono">
                {subItem}
              </TableCell>
            );
          }

          return <TableCell key={generateUUID("1")}>{subItem}</TableCell>;
        })}
      </TableRow>
      {record.children.type === "1" && isExpanded && (
        <TableRow className="hover:bg-transparent">
          <TableCell colSpan={Object.keys(record.data).length + 2}>
            <div className="flex py-4 pl-4">
              <TableLayerLine />
              <div className="w-14"></div>
              <div>
                <Table className="">
                  <SecreteTableHeader children={record.children} />
                  <SecreteTableBody children={record.children} />
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
  record,
  isExpanded,
  setIsExpanded,
}: {
  record: NemesisRecord;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
  if (
    record.children.type === "0" ||
    record.children.has_secrete.records.length === 0
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
        onClick={() => stores.person.action.deleteNemesis(id)}
      >
        Delete
      </Button>
    </TableCell>
  );
};

const getDateIndexes = (payload: NemesisRecord) => {
  return Object.keys(payload.data)
    .map((item, index) => {
      const lookup = ["Born", "In space since"];

      if (!lookup.includes(item)) return 0;

      return index + 1; //  handler #1 index
    })
    .filter((item) => item !== 0);
};
