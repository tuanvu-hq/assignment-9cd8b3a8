import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { usePersonStore } from "@/stores/hierarchy-table/person";
import type { Nemesis, Person, Secrete } from "@/types/hierarchy-table/person";
import { generateUUID } from "@/utils/shared/generate-uuid";

type Props = {
  item: Person | Nemesis | Secrete;
};

export const TableRowDeletableCell = ({ item }: Props) => {
  const stores = {
    person: usePersonStore(),
  };

  const handleDeletion = () => {
    if (item.__identifier === "person")
      stores.person.action.deletePerson(item.data.ID);
    if (item.__identifier === "nemesis")
      stores.person.action.deleteNemesis(item.data.ID);
    if (item.__identifier === "secrete")
      stores.person.action.deleteSecrete(item.data.ID);
  };

  return (
    <TableCell key={generateUUID("1")}>
      <Button
        className="hover:border-red-401 cursor-pointer hover:text-red-400"
        variant="outline"
        onClick={handleDeletion}
      >
        Delete
      </Button>
    </TableCell>
  );
};
