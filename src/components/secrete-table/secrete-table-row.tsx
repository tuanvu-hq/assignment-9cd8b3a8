import { usePersonStore } from "@/stores/person-store";
import type { ID } from "@/types/person/person-brands";
import type { SecreteRecord } from "@/types/person/secrete";
import { generateUUID } from "@/utils/generate-uuid";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";

type Props = {
  record: SecreteRecord;
};

export const SecreteTableRow = ({ record }: Props) => {
  return (
    <>
      <TableRow key={generateUUID("1")}>
        {[...Object.values(record.data), "#1"].map((subItem, idx) => {
          if (subItem === "#1") {
            return DisplaySubItemOne(record.data.ID);
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
    </>
  );
};

const DisplaySubItemOne = (id: ID) => {
  const stores = {
    person: usePersonStore(),
  };

  return (
    <TableCell key={generateUUID("1")}>
      <Button
        className="hover:border-red-401 cursor-pointer hover:text-red-400"
        variant="outline"
        onClick={() => stores.person.action.deleteSecrete(id)}
      >
        Delete
      </Button>
    </TableCell>
  );
};

const getDateIndexes = (payload: SecreteRecord) => {
  return Object.keys(payload.data)
    .map((item, index) => {
      const lookup = ["Born", "In space since"];

      if (!lookup.includes(item)) return 0;

      return index + 1; //  handler #1 index
    })
    .filter((item) => item !== 0);
};
