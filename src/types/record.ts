import type { ID, IsAlive, SecreteCode, Years } from "./person/person-brands";
import type { EmptyChildren } from "./shared";

export type NemesisRecord = {
  data: NemesisData;
  children: EmptyChildren | NemesisChildren;
};

export type NemesisData = {
  ID: ID;
  "Character ID": ID;
  "Is alive?": IsAlive;
  Years: Years;
};

export type NemesisChildren = {
  type: "1";
  has_secrete: {
    records: SecreteRecord[];
  };
};

export type SecreteRecord = {
  data: SecreteData;
  children: EmptyChildren;
};

export type SecreteData = {
  ID: ID;
  "Nemesis ID": ID;
  "Secrete Code": SecreteCode;
};
