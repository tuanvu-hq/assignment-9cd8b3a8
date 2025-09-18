import { generateUUID } from "@/utils";
import type {
  HierarchyChildren,
  HierarchyData,
  HierarchyTableData,
  Nemesis,
  NemesisChildren,
  NemesisRecord,
  NemesisRecordChildren,
  NemesisRecordData,
  Person,
  PersonChildren,
  Secrete,
  SecreteRecordData,
  UUID,
} from "../types";
import { generateBrandUUID } from "./generate-brands";

export const transformHierarchyData = (payload: HierarchyTableData[]) => {
  const list = [...payload].map(({ data, children }) => {
    const isEmpty = Object.keys(children).length === 0;
    const uuid = generateBrandUUID(generateUUID("1"));

    if (isEmpty) {
      return getPersonWithoutChildren({ data, uuid });
    }

    const records = (children as HierarchyChildren).has_nemesis.records.map(
      (record) => transformNemesisRecord({ record }),
    );
    const transformed: Person = getPerson({ data, uuid });
    (transformed.children as PersonChildren).records = records;

    return transformed;
  });

  return list;
};

const transformNemesisRecord = ({ record }: { record: NemesisRecord }) => {
  const { data, children } = record;
  const isEmpty = Object.keys(children).length === 0;

  if (isEmpty) {
    return getNemesisWithoutChildren({ data });
  }

  const records = (children as NemesisRecordChildren).has_secrete.records.map(
    ({ data }) => getSecrete({ data }),
  );
  const transformed = getNemesis({ data });
  (transformed.children as NemesisChildren).records = records;

  return transformed;
};

const getPersonWithoutChildren = ({
  data,
  uuid,
}: {
  data: HierarchyData;
  uuid: UUID;
}) => {
  const transformed: Person = {
    data,
    children: {
      __type: "no-children",
    },
    __metadata: {
      uuid,
    },
    __identifier: "person",
  };

  return transformed;
};

const getNemesisWithoutChildren = ({ data }: { data: NemesisRecordData }) => {
  const transformed: Nemesis = {
    data,
    __metadata: {},
    __identifier: "nemesis",
    children: {
      __type: "no-children",
    },
  };

  return transformed;
};

const getPerson = ({ data, uuid }: { data: HierarchyData; uuid: UUID }) => {
  const transformed: Person = {
    data,
    children: {
      records: [],
      __type: "has-children",
    },
    __metadata: {
      uuid,
    },
    __identifier: "person",
  };

  return transformed;
};

const getNemesis = ({ data }: { data: NemesisRecordData }) => {
  const transformed: Nemesis = {
    data,
    children: {
      records: [],
      __type: "has-children",
    },
    __metadata: {},
    __identifier: "nemesis",
  };

  return transformed;
};

const getSecrete = ({ data }: { data: SecreteRecordData }) => {
  const transformed: Secrete = {
    data,
    children: {
      __type: "no-children",
    },
    __metadata: {},
    __identifier: "secrete",
  };

  return transformed;
};
