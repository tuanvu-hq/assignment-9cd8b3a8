import type { UUID } from "./brands";
import type {
  HierarchyData,
  NemesisRecordData,
  SecreteRecordData,
} from "./hierarchy-table";
import type { EmptyChildren } from "./shared";

export type Person = {
  data: PersonData;
  children: EmptyChildren | PersonChildren;
  __metadata: {
    UUID: UUID;
  };
  __identifier: "person";
};

export type PersonData = {} & HierarchyData;

export type PersonChildren = {
  records: Nemesis[];
  __type: "1";
};

export type Nemesis = {
  data: NemesisData;
  children: EmptyChildren | NemesisChildren;
  __metadata: {};
  __identifier: "nemesis";
};

export type NemesisData = {} & NemesisRecordData;

export type NemesisChildren = {
  records: Secrete[];
  __type: "1";
};

export type Secrete = {
  data: SecreteData;
  __metadata: {};
  __identifier: "secrete";
};

export type SecreteData = {} & SecreteRecordData;
