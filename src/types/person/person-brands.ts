import type { Brand } from "../brand";
import type { AbilityType, BooleanType, GenderType } from "../shared";

export type Ability = Brand<AbilityType, "Ability">;
export type BeerConsuption = Brand<`${number}`, "Beer consumption (l/y)">;
export type Born = Brand<string, "Born">;
export type Gender = Brand<GenderType, "Gender">;
export type ID = Brand<`${number}`, "ID">;
export type InSpaceSince = Brand<string, "In space since">;
export type IsAlive = Brand<BooleanType, "Is alive?">;
export type KnowsTheAnswer = Brand<BooleanType, "Knows the answer?">;
export type MinimalDistance = Brand<string, "Minimal distance">;
export type Name = Brand<string, "Name">;
export type Weight = Brand<`${number}`, "Weight">;
export type Years = Brand<`${number}`, "Years">;
export type SecreteCode = Brand<`${number}`, "Secrete Code">;

export type UUID = Brand<string, "UUID">;
