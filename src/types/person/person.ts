import type {
  EmptyChildren,
  EmptyChildrenType,
  Metadata,
  PresentChildrenType,
} from "../shared";
import type { NemesisRecord, NemesisRecordModified } from "./nemesis";
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

export type PersonModified = PersonEmptyChildren | PersonPresentChildren;

export type PersonEmptyChildren = {
  data: PersonData;
  children: EmptyChildren;
} & EmptyChildrenType &
  Metadata;

export type PersonPresentChildren = {
  data: PersonData;
  children: PersonChildrenModified;
} & PresentChildrenType &
  Metadata;

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
  has_nemesis: {
    records: NemesisRecord[];
  };
};

export type PersonChildrenModified = {
  has_nemesis: {
    records: NemesisRecordModified[];
  };
};
