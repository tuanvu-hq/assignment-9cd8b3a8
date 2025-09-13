import { cn } from "@/lib/utils";
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

  console.log(record);

  return (
    <>
      <TableRow key={generateUUID("1")}>
        {["#1", ...Object.values(record.data), "#2"].map((subItem, index) => {
          if (subItem === "#1") {
            return DisplaySubItemOne({
              type: record.children.type,
              isExpanded,
              setIsExpanded,
            });
          }

          if (subItem === "#2") {
            return DisplaySubItemTwo();
          }

          if (getDateIndexes(record).includes(index)) {
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
  type,
  isExpanded,
  setIsExpanded,
}: {
  type: String;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
  if (type === "0") {
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

const getDateIndexes = (payload: NemesisRecord) => {
  return Object.keys(payload.data)
    .map((item, index) => {
      const lookup = ["Born", "In space since"];

      if (!lookup.includes(item)) return 0;

      return index + 1; //  handler #1 index
    })
    .filter((item) => item !== 0);
};
