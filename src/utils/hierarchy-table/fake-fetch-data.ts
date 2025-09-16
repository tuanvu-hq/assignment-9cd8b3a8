import JSON from "@/assets/example-data.json";

import type { HierarchyTableData } from "@/types/hierarchy-table/hierarchy-table";
import type { Person } from "@/types/hierarchy-table/person";
import { transformHierarchyData } from "./transform-hierarchy-data";

export const fakeFetchData$ = async (): Promise<Person[]> => {
  return Promise.resolve(transformHierarchyData(JSON as HierarchyTableData[]));
};
