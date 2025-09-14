import type { Person, PersonModified } from "@/types/person/person";
import JSON from "../assets/example-data.json";
import { handleETL } from "./handle-ETL";

export const fetchData$ = async (): Promise<PersonModified[]> => {
  return Promise.resolve(handleETL(JSON as Person[]));
};
