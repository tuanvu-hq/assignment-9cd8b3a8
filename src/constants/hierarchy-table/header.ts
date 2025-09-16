import type {
  NemesisTableHeader,
  PersonTableHeader,
  SecreteTableHeader,
  TableHeaderModifierValue,
  TableModifiers,
} from "@/types/hierarchy-table/header";

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

export const TABLE_HEADER_MODIFIER: TableModifiers<TableHeaderModifierValue> = {
  expandable: "#01",
  deletable: "#02",
} as const;
