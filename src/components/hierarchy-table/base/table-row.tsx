import { TableCell, TableRow as UiTableRow } from "@/components/ui/table";
import { TABLE_HEADER_MODIFIER } from "@/constants/hierarchy-table/header";
import type { TableModifiers } from "@/types/hierarchy-table/header";
import type { Nemesis, Person, Secrete } from "@/types/hierarchy-table/person";
import { generateUUID } from "@/utils/shared/generate-uuid";
import { useState } from "react";
import { TableRowDeletableCell } from "./table-row-deletable-cell";
import { TableRowExpandable } from "./table-row-expandable";
import { TableRowExpandableCell } from "./table-row-expandable-cell";

type Props = {
  item: Person | Nemesis | Secrete;
  modifiers: Partial<TableModifiers<boolean>>;
};

export const TableRow = ({ item, modifiers }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const values = [...Object.values(item.data)] as string[];
  if (modifiers.expandable) values.unshift(TABLE_HEADER_MODIFIER.expandable);
  if (modifiers.deletable) values.push(TABLE_HEADER_MODIFIER.deletable);

  return (
    <>
      <UiTableRow key={generateUUID("1")}>
        {values.map((value, index) => {
          if (value === TABLE_HEADER_MODIFIER.expandable) {
            return TableRowExpandableCell({
              item,
              expandedState: [isExpanded, setIsExpanded],
            });
          }

          if (value === TABLE_HEADER_MODIFIER.deletable) {
            return TableRowDeletableCell({ item });
          }

          if (getDateIndexes(item).includes(index)) {
            return (
              <TableCell key={generateUUID("1")} className="font-mono">
                {value}
              </TableCell>
            );
          }

          return <TableCell key={generateUUID("1")}>{value}</TableCell>;
        })}
      </UiTableRow>
      <TableRowExpandable
        item={item}
        values={values}
        modifiers={modifiers}
        expandedState={[isExpanded, null]}
      />
    </>
  );
};

const getDateIndexes = (item: Person | Nemesis | Secrete) => {
  const headers = [...Object.keys(item.data)];
  const lookup = ["Born", "In space since"];
  const addition = [TABLE_HEADER_MODIFIER.expandable];

  return headers
    .map((item, index) => {
      if (!lookup.includes(item)) return 0;

      return index + addition.length;
    })
    .filter((item) => item !== 0);
};
