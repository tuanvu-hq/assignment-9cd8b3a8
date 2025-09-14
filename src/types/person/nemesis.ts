import type {
  EmptyChildren,
  EmptyChildrenType,
  Metadata,
  PresentChildrenType,
} from "../shared";
import type { ID, IsAlive, Years } from "./person-brands";
import type { SecreteRecord } from "./secrete";

export type NemesisRecord = {
  data: NemesisRecordData;
  children: EmptyChildren | NemesisRecordChildren;
};

export type NemesisRecordModified =
  | NemesisRecordEmptyChildren
  | NemesisRecordPresentChildren;

export type NemesisRecordEmptyChildren = {
  data: NemesisRecordData;
  children: EmptyChildren;
} & EmptyChildrenType &
  Metadata;

export type NemesisRecordPresentChildren = {
  data: NemesisRecordData;
  children: NemesisRecordChildren;
} & PresentChildrenType &
  Metadata;

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
