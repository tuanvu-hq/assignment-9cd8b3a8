import type { Person } from "@/types/person/person";

export const handleETL = (payload: any) => {
  const data = [...(payload as Person[])].map((person) => {
    const isEmpty = Object.keys(person.children).length === 0;

    return {
      ...person,
      children: { ...person.children, type: isEmpty ? "0" : "1" },
    };
  });

  return data as Person[];
};
