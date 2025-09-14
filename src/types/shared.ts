import type { UUID } from "./person/person-brands";

export type EmptyChildren = {};

export type AbilityType =
  | "42"
  | "NULL"
  | "coastlines_creator"
  | "enjoys_tea"
  | "has_towel"
  | "mathematician"
  | "mothering"
  | "quite_talkative"
  | "semi_half_cousin";
export type BooleanType = "false" | "true";
export type GenderType = "" | "F" | "M" | "female" | "m" | "male" | "mouse";

export type EmptyChildrenType = {
  __type: "0";
};

export type PresentChildrenType = {
  __type: "1";
};

export type Metadata = {
  __metadata: {
    UUID: UUID;
  };
};
