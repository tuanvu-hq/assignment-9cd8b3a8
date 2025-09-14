import type {
  NemesisRecord,
  NemesisRecordChildren,
  NemesisRecordEmptyChildren,
  NemesisRecordPresentChildren,
} from "@/types/person/nemesis";
import type {
  Person,
  PersonChildren,
  PersonChildrenModified,
  PersonEmptyChildren,
  PersonModified,
  PersonPresentChildren,
} from "@/types/person/person";
import { generateBrandUUID } from "./generate-brands-person";
import { generateUUID } from "./generate-uuid";

export const handleETL = (payload: Person[]): PersonModified[] => {
  const data = [...payload].map((person) => {
    const mappedPerson = mapPerson(person);

    if (mappedPerson.__type === "1") {
      mappedPerson.children.has_nemesis.records =
        mappedPerson.children.has_nemesis.records.map((record) =>
          mapNemesisRecord(record),
        );
    }

    return mappedPerson;
  });

  return data satisfies PersonModified[];
};

export const mapPerson = (
  person: Person,
): PersonEmptyChildren | PersonPresentChildren => {
  const isEmpty = Object.keys(person.children ?? {}).length === 0;
  const data = person.data;
  const UUID = generateBrandUUID(generateUUID("1"));
  const __metadata = { UUID };

  if (isEmpty) {
    const children = {};

    return {
      data,
      children,
      __metadata,
      __type: "0",
    } satisfies PersonEmptyChildren;
  }

  const children: PersonChildrenModified = {
    has_nemesis: {
      records: (person.children as PersonChildren).has_nemesis.records.map(
        mapNemesisRecord,
      ),
    },
  };

  return {
    data,
    children,
    __metadata,
    __type: "1",
  } satisfies PersonPresentChildren;
};

export const mapNemesisRecord = (
  record: NemesisRecord,
): NemesisRecordEmptyChildren | NemesisRecordPresentChildren => {
  const isEmpty = Object.keys(record.children ?? {}).length === 0;
  const data = record.data;
  const UUID = generateBrandUUID(generateUUID("1"));
  const __metadata = { UUID };

  if (isEmpty) {
    const children = {};

    return {
      data,
      children,
      __metadata,
      __type: "0",
    } satisfies NemesisRecordEmptyChildren;
  }

  const children = record.children as NemesisRecordChildren;

  return {
    data,
    children,
    __metadata,
    __type: "1",
  } satisfies NemesisRecordPresentChildren;
};
