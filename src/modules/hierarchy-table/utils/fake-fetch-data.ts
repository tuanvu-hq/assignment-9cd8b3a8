import JSON from "@/assets/example-data.json";

import type { HierarchyTableData, Person } from "../types";
import { transformHierarchyData } from "./transform-hierarchy-data";

export const fakeFetchData$ = async (): Promise<Person[]> => {
  return Promise.resolve(transformHierarchyData(JSON as HierarchyTableData[]));
};
