import type { Result } from "@/types";
// import type {
//   Ability,
//   BeerConsuption,
//   Born,
//   Gender,
//   ID,
//   InSpaceSince,
//   IsAlive,
//   KnowsTheAnswer,
//   MinimalDistance,
//   Name,
//   SecreteCode,
//   UUID,
//   Weight,
//   Years,
// } from "@/types/hierarchy-table/brands";
import type {
  Ability,
  AbilityType,
  BeerConsuption,
  BooleanType,
  Born,
  Gender,
  GenderType,
  ID,
  InSpaceSince,
  IsAlive,
  KnowsTheAnswer,
  MinimalDistance,
  Name,
  SecreteCode,
  UUID,
  Weight,
  Years,
} from "../types";

export const generateBrandAbility = (payload: AbilityType) => {
  return payload as Ability;
};

export const generateBrandBeerConsuption = (payload: `${number}`) => {
  return payload as BeerConsuption;
};

export const generateBrandBorn = (payload: string): Result<Born> => {
  const dateRegex =
    /^[A-Za-z]{3} [A-Za-z]{3} \d{1,2} \d{2}:\d{2}:\d{2} [A-Z]{3,4} \d{4}$/;

  if (payload.length === 0) return [null, Error("invalid payload")];
  if (isNaN(Date.parse(payload))) return [null, Error("invalid payload")];
  if (!dateRegex.test(payload)) return [null, Error("invalid payload")];

  return [payload as Born, null];
};

export const generateBrandGender = (payload: GenderType) => {
  return payload as Gender;
};

export const generateBrandID = (payload: `${number}`) => {
  return payload as ID;
};

export const generateBrandInSpaceSince = (
  payload: string,
): Result<InSpaceSince> => {
  const dateRegex =
    /^[A-Za-z]{3} [A-Za-z]{3} \d{1,2} \d{2}:\d{2}:\d{2} [A-Z]{3,4} \d{4}$/;

  if (payload.length === 0) return [null, Error("invalid payload")];
  if (isNaN(Date.parse(payload))) return [null, Error("invalid payload")];
  if (!dateRegex.test(payload)) return [null, Error("invalid payload")];

  return [payload as InSpaceSince, null];
};

export const generateBrandIsAlive = (payload: BooleanType): Result<IsAlive> => {
  if (payload.length === 0) return [null, Error("invalid payload")];
  if (payload !== "true" && payload !== "false") {
    return [null, Error("invalid payload")];
  }

  return [payload as IsAlive, null];
};

export const generateBrandKnowsTheAnswer = (
  payload: BooleanType,
): Result<KnowsTheAnswer> => {
  if (payload.length === 0) return [null, Error("invalid payload")];
  if (payload !== "true" && payload !== "false") {
    return [null, Error("invalid payload")];
  }

  return [payload as KnowsTheAnswer, null];
};

export const generateBrandMinimalDistance = (
  payload: string,
): Result<MinimalDistance> => {
  if (payload.length === 0) return [null, Error("invalid payload")];
  if (isNaN(parseFloat(payload))) return [null, Error("invalid payload")];

  return [payload as MinimalDistance, null];
};

export const generateBrandName = (payload: string) => {
  return payload as Name;
};

export const generateBrandWeight = (payload: `${number}`) => {
  return payload as Weight;
};

export const generateBrandYears = (payload: `${number}`) => {
  return payload as Years;
};

export const generateBrandSecreteCode = (payload: `${number}`) => {
  return payload as SecreteCode;
};

export const generateBrandUUID = (payload: string) => {
  return payload as UUID;
};
