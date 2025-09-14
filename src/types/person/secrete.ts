import type { EmptyChildren } from "../shared";
import type { ID, SecreteCode } from "./person-brands";

export type SecreteRecord = {
  data: SecreteData;
  children: EmptyChildren;
};

export type SecreteData = {
  ID: ID;
  "Nemesis ID": ID;
  "Secrete Code": SecreteCode;
};
