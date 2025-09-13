import type { Person } from "@/types/person/person";
import JSON from "../assets/example-data.json";
import { handleETL } from "./handle-ETL";

export const fetchData$ = async (): Promise<Person[]> => {
  return Promise.resolve(handleETL(JSON));
};
