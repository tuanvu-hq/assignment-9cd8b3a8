import type { Person } from "@/types/person/person";
import type { NemesisRecord } from "@/types/record";

export const handleETL = (payload: any) => {
  const data = [...(payload as Person[])].map((person) => {
    const mappedPerson = mapPersonChildren(person);

    if (mappedPerson.children.type === "1") {
      mappedPerson.children.has_nemesis.records =
        mappedPerson.children.has_nemesis.records.map(
          (nemesis: NemesisRecord) => mapNemesisChildren(nemesis),
        );
    }

    return mappedPerson;
  });

  return data;
};

export const mapPersonChildren = (person: Person) => {
  const isEmpty = Object.keys(person.children ?? {}).length === 0;

  return {
    ...person,
    children: {
      ...person.children,
      type: isEmpty ? "0" : "1",
    },
  } as Person;
};

export const mapNemesisChildren = (nemesis: NemesisRecord) => {
  const isEmpty = Object.keys(nemesis.children ?? {}).length === 0;

  return {
    ...nemesis,
    children: {
      ...nemesis.children,
      type: isEmpty ? "0" : "1",
    },
  } as NemesisRecord;
};
