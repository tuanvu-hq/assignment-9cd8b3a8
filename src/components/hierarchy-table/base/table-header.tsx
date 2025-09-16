import {
  TableHead,
  TableRow,
  TableHeader as UiTableHeader,
} from "@/components/ui/table";
import { TABLE_HEADER_MODIFIER } from "@/constants/hierarchy-table/header";
import type {
  NemesisTableHeader,
  PersonTableHeader,
  SecreteTableHeader,
  TableModifiers,
} from "@/types/hierarchy-table/header";

type Props = {
  identifier: string;
  list: PersonTableHeader[] | NemesisTableHeader[] | SecreteTableHeader[];
  modifiers: Partial<TableModifiers<boolean>>;
};

export const TableHeader = ({ identifier, list, modifiers }: Props) => {
  const headers = [...list] as string[];
  if (modifiers.expandable) headers.unshift(TABLE_HEADER_MODIFIER.expandable);
  if (modifiers.deletable) headers.push(TABLE_HEADER_MODIFIER.deletable);

  return (
    <UiTableHeader>
      <TableRow className="hover:bg-transparent">
        {headers.map((item) => {
          const key = `${identifier}-header.${item}`;

          if (item === TABLE_HEADER_MODIFIER.expandable) {
            return <TableHead key={key} className="w-20"></TableHead>;
          }

          if (item === TABLE_HEADER_MODIFIER.deletable) {
            return <TableHead key={key}>Delete</TableHead>;
          }

          return <TableHead key={key}>{item}</TableHead>;
        })}
      </TableRow>
    </UiTableHeader>
  );
};
