import type { NemesisRecord } from "../record";
import type { EmptyChildren } from "../shared";
import type {
  Ability,
  BeerConsuption,
  Born,
  Gender,
  ID,
  InSpaceSince,
  KnowsTheAnswer,
  MinimalDistance,
  Name,
  Weight,
} from "./person-brands";

export type Person = {
  data: PersonData;
  children: EmptyChildren | PersonChildren;
};

export type PersonData = {
  ID: ID;
  Name: Name;
  Gender: Gender;
  Ability: Ability;
  "Minimal distance": MinimalDistance;
  Weight: Weight;
  Born: Born;
  "In space since": InSpaceSince;
  "Beer consumption (l/y)": BeerConsuption;
  "Knows the answer?": KnowsTheAnswer;
};

export type PersonChildren = {
  type: "1";
  has_nemesis: {
    records: NemesisRecord[];
  };
};
