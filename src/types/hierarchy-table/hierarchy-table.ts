import type {
  Ability,
  BeerConsuption,
  Born,
  Gender,
  ID,
  InSpaceSince,
  IsAlive,
  KnowsTheAnswer,
  MinimalDistance,
  Name,
  SecreteCode,
  Weight,
  Years,
} from "./brands";
import type { EmptyChildren, ProbablyEmptyChildren } from "./shared";

export type HierarchyTableData = {
  data: HierarchyData;
  children: ProbablyEmptyChildren | HierarchyChildren;
};

export type HierarchyData = {
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

export type HierarchyChildren = {
  has_nemesis: {
    records: NemesisRecord[];
  };
};

export type NemesisRecord = {
  data: NemesisRecordData;
  children: ProbablyEmptyChildren | NemesisRecordChildren;
};

export type NemesisRecordData = {
  ID: ID;
  "Character ID": ID;
  "Is alive?": IsAlive;
  Years: Years;
};

export type NemesisRecordChildren = {
  has_secrete: {
    records: SecreteRecord[];
  };
};

export type SecreteRecord = {
  data: SecreteRecordData;
  children: EmptyChildren;
};

export type SecreteRecordData = {
  ID: ID;
  "Nemesis ID": ID;
  "Secrete Code": SecreteCode;
};
