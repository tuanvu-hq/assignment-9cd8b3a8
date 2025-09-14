import type { NemesisRecordData } from "./nemesis";
import type { PersonData } from "./person";
import type { SecreteData } from "./secrete";

export type PersonTableHeader = keyof PersonData;

export type NemesisTableHeader = keyof NemesisRecordData;

export type SecreteTableHeader = keyof SecreteData;
