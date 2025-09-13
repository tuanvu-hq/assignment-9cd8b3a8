import type { Person } from "@/types/person/person";
import JSON from "../assets/example-data.json";

export const fetchData$ = async (): Promise<Person[]> => {
  return Promise.resolve(JSON as Person[]);
};
