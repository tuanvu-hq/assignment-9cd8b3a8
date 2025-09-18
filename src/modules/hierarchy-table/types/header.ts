import type { NemesisData, PersonData, SecreteData } from "./person";

export type PersonTableHeader = keyof PersonData;

export type NemesisTableHeader = keyof NemesisData;

export type SecreteTableHeader = keyof SecreteData;

export type TableHeaderModifierKey = "expandable" | "deletable";

export type TableHeaderModifierValue = "#01" | "#02";

export type TableModifiers<T> = {
  [key in TableHeaderModifierKey]: T;
};
