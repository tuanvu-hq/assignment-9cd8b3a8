import type {
  NemesisTableHeader,
  PersonTableHeader,
  SecreteTableHeader,
} from "@/types/person/table";

export const PERSON_TABLE_HEADER: PersonTableHeader[] = [
  "ID",
  "Name",
  "Gender",
  "Ability",
  "Minimal distance",
  "Weight",
  "Born",
  "In space since",
  "Beer consumption (l/y)",
  "Knows the answer?",
] as const;

export const NEMESIS_TABLE_HEADER: NemesisTableHeader[] = [
  "ID",
  "Character ID",
  "Is alive?",
  "Years",
] as const;

export const SECRETE_TABLE_HEADER: SecreteTableHeader[] = [
  "ID",
  "Nemesis ID",
  "Secrete Code",
] as const;
