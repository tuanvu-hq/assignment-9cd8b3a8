import type { Person } from "@/types/person/person";
import { handleETL } from "@/utils/handle-ETL";
import { expect, test } from "vitest";
import JSON from "../assets/example-data.json";

const DATA = handleETL(JSON as Person[]);

test("test_data_length_ok", () => {
  expect(DATA.length).toBe(11);
});

test("test_item_1_exact", () => {
  const { data, children, __type } = DATA[0];

  expect(data.ID).toBe("44");
  expect(data.Name).toBe("Trillian");
  expect(data.Gender).toBe("female");
  expect(data.Ability).toBe("mathematician");
  expect(data["Minimal distance"]).toBe("6.2000000000");
  expect(data.Weight).toBe("49");
  expect(data.Born).toBe("Mon Dec 14 00:00:00 CET 1994");
  expect(data["In space since"]).toBe("Wed Dec 24 17:21:50 CET 2014");
  expect(data["Beer consumption (l/y)"]).toBe("6704");
  expect(data["Knows the answer?"]).toBe("true");

  let keys = Object.keys(children);

  expect(keys.length).toBeGreaterThan(0);

  if (__type === "1") {
    const items = children.has_nemesis.records;

    expect(items[0].data.ID).toBe("1007");
    expect(items[0].data["Character ID"]).toBe("44");
    expect(items[0].data["Is alive?"]).toBe("true");
    expect(items[0].data.Years).toBe("29");

    if (items[0].__type === "1") {
      const subItems = items[0].children.has_secrete.records;

      expect(subItems[0].data.ID).toBe("2008");
      expect(subItems[0].data["Nemesis ID"]).toBe("1007");
      expect(subItems[0].data["Secrete Code"]).toBe("1799820570");
    }
  }
});

test("test_item_2_exact", () => {
  const { data, __type } = DATA[1];

  expect(data.ID).toBe("48");
  expect(data.Name).toBe("Zaphod Beeblebrox");
  expect(data.Gender).toBe("m");
  expect(data.Ability).toBe("semi_half_cousin");
  expect(data["Minimal distance"]).toBe("1.6000000000");
  expect(data.Weight).toBe("91");
  expect(data.Born).toBe("Mon Feb 17 00:00:00 CET 1997");
  expect(data["In space since"]).toBe("Wed Dec 04 04:09:55 CET 2014");
  expect(data["Beer consumption (l/y)"]).toBe("679420");
  expect(data["Knows the answer?"]).toBe("true");

  expect(__type).toBe("0");
});

test("test_item_3_exact", () => {
  const { data, __type } = DATA[2];

  expect(data.ID).toBe("48");
  expect(data.Name).toBe("Zaphod Beeblebrox");
  expect(data.Gender).toBe("m");
  expect(data.Ability).toBe("semi_half_cousin");
  expect(data["Minimal distance"]).toBe("1.6000000000");
  expect(data.Weight).toBe("91");
  expect(data.Born).toBe("Mon Feb 17 00:00:00 CET 1997");
  expect(data["In space since"]).toBe("Wed Dec 04 04:09:55 CET 2014");
  expect(data["Beer consumption (l/y)"]).toBe("679242");
  expect(data["Knows the answer?"]).toBe("true");

  expect(__type).toBe("0");
});

test("test_item_4_exact", () => {
  const { data, children, __type } = DATA[3];

  expect(data.ID).toBe("52");
  expect(data.Name).toBe("Ford Prefect");
  expect(data.Gender).toBe("M");
  expect(data.Ability).toBe("has_towel");
  expect(data["Minimal distance"]).toBe("0.8000000000");
  expect(data.Weight).toBe("107");
  expect(data.Born).toBe("Thu May 41 00:00:00 CET 2001");
  expect(data["In space since"]).toBe("Sun Dec 21 11:57:06 CET 2014");
  expect(data["Beer consumption (l/y)"]).toBe("62544");
  expect(data["Knows the answer?"]).toBe("true");

  let keys = Object.keys(children);

  expect(keys.length).toBeGreaterThan(0);

  if (__type === "1") {
    const items = children.has_nemesis.records;

    expect(items[0].data.ID).toBe("1684");
    expect(items[0].data["Character ID"]).toBe("52");
    expect(items[0].data["Is alive?"]).toBe("true");
    expect(items[0].data.Years).toBe("28");

    if (items[0].__type === "1") {
      const subItems = items[0].children.has_secrete.records;

      expect(subItems.length).toBe(4);

      expect(subItems[0].data.ID).toBe("1404");
      expect(subItems[0].data["Nemesis ID"]).toBe("1684");
      expect(subItems[0].data["Secrete Code"]).toBe("5464826016");
      expect(Object.keys(subItems[0].children).length).toBe(0);

      expect(subItems[1].data.ID).toBe("1415");
      expect(subItems[1].data["Nemesis ID"]).toBe("1684");
      expect(subItems[1].data["Secrete Code"]).toBe("6270976449");
      expect(Object.keys(subItems[1].children).length).toBe(0);

      expect(subItems[2].data.ID).toBe("2505");
      expect(subItems[2].data["Nemesis ID"]).toBe("1684");
      expect(subItems[2].data["Secrete Code"]).toBe("7899028241");
      expect(Object.keys(subItems[2].children).length).toBe(0);

      expect(subItems[3].data.ID).toBe("4479");
      expect(subItems[3].data["Nemesis ID"]).toBe("1684");
      expect(subItems[3].data["Secrete Code"]).toBe("9442445871");
      expect(Object.keys(subItems[3].children).length).toBe(0);
    }
  }
});

test("test_item_5_exact", () => {
  const { data, children, __type } = DATA[4];

  expect(data.ID).toBe("86");
  expect(data.Name).toBe("Mrs Alice Beeblebrox");
  expect(data.Gender).toBe("F");
  expect(data.Ability).toBe("mothering");
  expect(data["Minimal distance"]).toBe("4.0000000000");
  expect(data.Weight).toBe("104");
  expect(data.Born).toBe("Mon May 08 00:00:00 CET 2001");
  expect(data["In space since"]).toBe("Wed Oct 15 12:21:59 CET 2014");
  expect(data["Beer consumption (l/y)"]).toBe("64");
  expect(data["Knows the answer?"]).toBe("false");

  let keys = Object.keys(children);

  expect(keys.length).toBeGreaterThan(0);

  if (__type === "1") {
    const items = children.has_nemesis.records;

    expect(items[0].data.ID).toBe("116");
    expect(items[0].data["Character ID"]).toBe("86");
    expect(items[0].data["Is alive?"]).toBe("true");
    expect(items[0].data.Years).toBe("45");

    if (items[0].__type === "1") {
      const subItems = items[0].children.has_secrete.records;

      expect(subItems.length).toBe(3);

      expect(subItems[0].data.ID).toBe("928");
      expect(subItems[0].data["Nemesis ID"]).toBe("116");
      expect(subItems[0].data["Secrete Code"]).toBe("9449428626");
      expect(Object.keys(subItems[0].children).length).toBe(0);

      expect(subItems[1].data.ID).toBe("2191");
      expect(subItems[1].data["Nemesis ID"]).toBe("116");
      expect(subItems[1].data["Secrete Code"]).toBe("4169606040");
      expect(Object.keys(subItems[1].children).length).toBe(0);

      expect(subItems[2].data.ID).toBe("2820");
      expect(subItems[2].data["Nemesis ID"]).toBe("116");
      expect(subItems[2].data["Secrete Code"]).toBe("4167477856");
      expect(Object.keys(subItems[2].children).length).toBe(0);
    }
  }
});

test("test_item_6_exact", () => {
  const { data, children, __type } = DATA[5];

  expect(data.ID).toBe("94");
  expect(data.Name).toBe("Slartibartfast");
  expect(data.Gender).toBe("male");
  expect(data.Ability).toBe("coastlines_creator");
  expect(data["Minimal distance"]).toBe("0.4000000000");
  expect(data.Weight).toBe("96");
  expect(data.Born).toBe("Thu May 04 00:00:00 CET 1997");
  expect(data["In space since"]).toBe("Thu Sep 19 01:26:41 CET 2014");
  expect(data["Beer consumption (l/y)"]).toBe("46901");
  expect(data["Knows the answer?"]).toBe("true");

  let keys = Object.keys(children);

  expect(keys.length).toBeGreaterThan(0);

  if (__type === "1") {
    const items = children.has_nemesis.records;

    expect(items.length).toBe(2);

    expect(items[0].data.ID).toBe("758");
    expect(items[0].data["Character ID"]).toBe("94");
    expect(items[0].data["Is alive?"]).toBe("true");
    expect(items[0].data.Years).toBe("44");

    if (items[0].__type === "1") {
      const subItem1 = items[0].children.has_secrete.records[0];

      expect(subItem1.data.ID).toBe("2422");
      expect(subItem1.data["Nemesis ID"]).toBe("758");
      expect(subItem1.data["Secrete Code"]).toBe("4168664804");
      expect(Object.keys(subItem1.children).length).toBe(0);

      expect(items[1].data.ID).toBe("1405");
      expect(items[1].data["Character ID"]).toBe("94");
      expect(items[1].data["Is alive?"]).toBe("true");
      expect(items[1].data.Years).toBe("44");
    }

    if (items[1].__type === "1") {
      const subItem2 = items[1].children.has_secrete.records[0];

      expect(subItem2.data.ID).toBe("4270");
      expect(subItem2.data["Nemesis ID"]).toBe("1405");
      expect(subItem2.data["Secrete Code"]).toBe("5464646769");
      expect(Object.keys(subItem2.children).length).toBe(0);
    }
  }
});

test("test_item_7_exact", () => {
  const { data, children, __type } = DATA[6];

  expect(data.ID).toBe("99");
  expect(data.Name).toBe("Arthur Dent");
  expect(data.Gender).toBe("M");
  expect(data.Ability).toBe("enjoys_tea");
  expect(data["Minimal distance"]).toBe("1.5000000000");
  expect(data.Weight).toBe("86");
  expect(data.Born).toBe("Sat Sep 02 00:00:00 CET 1989");
  expect(data["In space since"]).toBe("Wed Nov 12 01:22:57 CET 2014");
  expect(data["Beer consumption (l/y)"]).toBe("579");
  expect(data["Knows the answer?"]).toBe("false");

  let keys = Object.keys(children);

  expect(keys.length).toBeGreaterThan(0);

  if (__type === "1") {
    const items = children.has_nemesis.records;

    expect(items.length).toBe(1);

    expect(items[0].data.ID).toBe("424");
    expect(items[0].data["Character ID"]).toBe("99");
    expect(items[0].data["Is alive?"]).toBe("true");
    expect(items[0].data.Years).toBe("");

    if (items[0].__type === "1") {
      const subItems = items[0].children.has_secrete.records;

      expect(subItems.length).toBe(1);

      expect(subItems[0].data.ID).toBe("1821");
      expect(subItems[0].data["Nemesis ID"]).toBe("424");
      expect(subItems[0].data["Secrete Code"]).toBe("842 2644094");
      expect(Object.keys(subItems[0].children).length).toBe(0);
    }
  }
});

test("test_item_8_exact", () => {
  const { data, children, __type } = DATA[7];

  expect(data.ID).toBe("108");
  expect(data.Name).toBe("Frankie");
  expect(data.Gender).toBe("mouse");
  expect(data.Ability).toBe("NULL");
  expect(data["Minimal distance"]).toBe("4.0000000000");
  expect(data.Weight).toBe("0.18");
  expect(data.Born).toBe("Sun May 29 00:00:00 CET 1995");
  expect(data["In space since"]).toBe("Thu Nov 27 12:46:16 CET 2014");
  expect(data["Beer consumption (l/y)"]).toBe("55");
  expect(data["Knows the answer?"]).toBe("true");

  let keys = Object.keys(children);

  expect(keys.length).toBeGreaterThan(0);

  if (__type === "1") {
    const items = children.has_nemesis.records;

    expect(items.length).toBe(2);

    expect(items[0].data.ID).toBe("454");
    expect(items[0].data["Character ID"]).toBe("108");
    expect(items[0].data["Is alive?"]).toBe("true");
    expect(items[0].data.Years).toBe("27");

    if (items[0].__type === "1") {
      const subItems1 = items[0].children.has_secrete.records;

      expect(subItems1.length).toBe(2);

      expect(subItems1[0].data.ID).toBe("946");
      expect(subItems1[0].data["Nemesis ID"]).toBe("454");
      expect(subItems1[0].data["Secrete Code"]).toBe("5467717091");
      expect(Object.keys(subItems1[0].children).length).toBe(0);

      expect(subItems1[1].data.ID).toBe("2945");
      expect(subItems1[1].data["Nemesis ID"]).toBe("454");
      expect(subItems1[1].data["Secrete Code"]).toBe("416 6492176");
      expect(Object.keys(subItems1[1].children).length).toBe(0);

      expect(items[1].data.ID).toBe("1410");
      expect(items[1].data["Character ID"]).toBe("108");
      expect(items[1].data["Is alive?"]).toBe("false");
      expect(items[1].data.Years).toBe("40");
    }

    if (items[1].__type === "1") {
      const subItems2 = items[1].children.has_secrete.records;

      expect(subItems2.length).toBe(2);

      expect(subItems2[0].data.ID).toBe("676");
      expect(subItems2[0].data["Nemesis ID"]).toBe("1410");
      expect(subItems2[0].data["Secrete Code"]).toBe("6271440484");
      expect(Object.keys(subItems2[0].children).length).toBe(0);

      expect(subItems2[1].data.ID).toBe("2177");
      expect(subItems2[1].data["Nemesis ID"]).toBe("1410");
      expect(subItems2[1].data["Secrete Code"]).toBe("6275689247");
      expect(subItems2[1].children).toEqual({});
    }
  }
});

test("test_item_9_exact", () => {
  const { data, children, __type } = DATA[8];

  expect(data.ID).toBe("109");
  expect(data.Name).toBe("Benjy");
  expect(data.Gender).toBe("mouse");
  expect(data.Ability).toBe("NULL");
  expect(data["Minimal distance"]).toBe("2.5000000000");
  expect(data.Weight).toBe("0.12");
  expect(data.Born).toBe("Sun Apr 02 00:00:00 CET 1989");
  expect(data["In space since"]).toBe("Sun Nov 24 09:50:45 CET 2014");
  expect(data["Beer consumption (l/y)"]).toBe("56");
  expect(data["Knows the answer?"]).toBe("true");

  let keys = Object.keys(children);

  expect(keys.length).toBeGreaterThan(0);

  if (__type === "1") {
    const items = children.has_nemesis.records;

    expect(items.length).toBe(2);

    expect(items[0].data.ID).toBe("454");
    expect(items[0].data["Character ID"]).toBe("109");
    expect(items[0].data["Is alive?"]).toBe("true");
    expect(items[0].data.Years).toBe("46");

    if (items[0].__type === "1") {
      const subItems1 = items[0].children.has_secrete.records;

      expect(subItems1.length).toBe(3);

      expect(subItems1[0].data.ID).toBe("214");
      expect(subItems1[0].data["Nemesis ID"]).toBe("24");
      expect(subItems1[0].data["Secrete Code"]).toBe("6275900044");
      expect(Object.keys(subItems1[0].children).length).toBe(0);

      expect(subItems1[1].data.ID).toBe("942");
      expect(subItems1[1].data["Nemesis ID"]).toBe("24");
      expect(subItems1[1].data["Secrete Code"]).toBe("8422745472");
      expect(Object.keys(subItems1[1].children).length).toBe(0);

      expect(subItems1[2].data.ID).toBe("1448");
      expect(subItems1[2].data["Nemesis ID"]).toBe("24");
      expect(subItems1[2].data["Secrete Code"]).toBe("416 8467224");
      expect(Object.keys(subItems1[2].children).length).toBe(0);

      expect(items[1].data.ID).toBe("1545");
      expect(items[1].data["Character ID"]).toBe("109");
      expect(items[1].data["Is alive?"]).toBe("true");
      expect(items[1].data.Years).toBe("25");
    }

    if (items[1].__type === "1") {
      const subItems2 = items[1].children.has_secrete.records;

      expect(subItems2.length).toBe(2);

      expect(subItems2[0].data.ID).toBe("4045");
      expect(subItems2[0].data["Nemesis ID"]).toBe("1545");
      expect(subItems2[0].data["Secrete Code"]).toBe("6277097442");
      expect(Object.keys(subItems2[0].children).length).toBe(0);

      expect(subItems2[1].data.ID).toBe("4104");
      expect(subItems2[1].data["Nemesis ID"]).toBe("1545");
      expect(subItems2[1].data["Secrete Code"]).toBe("6272449905");
      expect(Object.keys(subItems2[1].children).length).toBe(0);
    }
  }
});

test("test_item_10_exact", () => {
  const { data, children, __type } = DATA[9];

  expect(data.ID).toBe("120");
  expect(data.Name).toBe("Deep Thought");
  expect(data.Gender).toBe("");
  expect(data.Ability).toBe("42");
  expect(data["Minimal distance"]).toBe("4.2000000000");
  expect(data.Weight).toBe("420");
  expect(data.Born).toBe("Mon Oct 09 00:42:00 CET 2000");
  expect(data["In space since"]).toBe("Wed Oct 22 22:42:42 CET 4042");
  expect(data["Beer consumption (l/y)"]).toBe("4242");
  expect(data["Knows the answer?"]).toBe("true");

  let keys = Object.keys(children);

  expect(keys.length).toBeGreaterThan(0);

  if (__type === "1") {
    const items = children.has_nemesis.records;

    expect(items.length).toBe(2);

    expect(items[0].data.ID).toBe("1128");
    expect(items[0].data["Character ID"]).toBe("120");
    expect(items[0].data["Is alive?"]).toBe("true");
    expect(items[0].data.Years).toBe("49");

    expect(items[1].data.ID).toBe("1420");
    expect(items[1].data["Character ID"]).toBe("120");
    expect(items[1].data["Is alive?"]).toBe("true");
    expect(items[1].data.Years).toBe("48");

    if (items[1].__type === "1") {
      const subItems = items[1].children.has_secrete.records;

      expect(subItems.length).toBe(2);

      expect(subItems[0].data.ID).toBe("1019");
      expect(subItems[0].data["Nemesis ID"]).toBe("1420");
      expect(subItems[0].data["Secrete Code"]).toBe("8424742058");
      expect(Object.keys(subItems[0].children).length).toBe(0);

      expect(subItems[1].data.ID).toBe("4844");
      expect(subItems[1].data["Nemesis ID"]).toBe("1420");
      expect(subItems[1].data["Secrete Code"]).toBe("1798274556");
      expect(Object.keys(subItems[1].children).length).toBe(0);
    }
  }
});

test("test_item_11_exact", () => {
  const { data, children, __type } = DATA[10];

  expect(data.ID).toBe("124");
  expect(data.Name).toBe("Eddie");
  expect(data.Gender).toBe("M");
  expect(data.Ability).toBe("quite_talkative");
  expect(data["Minimal distance"]).toBe("2.2000000000");
  expect(data.Weight).toBe("100");
  expect(data.Born).toBe("Mon Apr 04 00:00:00 CET 1989");
  expect(data["In space since"]).toBe("Thu Dec 25 04:44:17 CET 2014");
  expect(data["Beer consumption (l/y)"]).toBe("0");
  expect(data["Knows the answer?"]).toBe("false");

  let keys = Object.keys(children);

  expect(keys.length).toBeGreaterThan(0);

  if (__type === "1") {
    const items = children.has_nemesis.records;
    expect(items.length).toBe(1);

    expect(items[0].data.ID).toBe("1499");
    expect(items[0].data["Character ID"]).toBe("124");
    expect(items[0].data["Is alive?"]).toBe("");
    expect(items[0].data.Years).toBe("44");

    if (items[0].__type === "1") {
      const subItems = items[0].children.has_secrete.records;

      expect(subItems.length).toBe(3);

      expect(subItems[0].data.ID).toBe("210");
      expect(subItems[0].data["Nemesis ID"]).toBe("1499");
      expect(subItems[0].data["Secrete Code"]).toBe("179 0415701");
      expect(Object.keys(subItems[0].children).length).toBe(0);

      expect(subItems[1].data.ID).toBe("909");
      expect(subItems[1].data["Nemesis ID"]).toBe("1499");
      expect(subItems[1].data["Secrete Code"]).toBe("7898402279");
      expect(Object.keys(subItems[1].children).length).toBe(0);

      expect(subItems[2].data.ID).toBe("2610");
      expect(subItems[2].data["Nemesis ID"]).toBe("1499");
      expect(subItems[2].data["Secrete Code"]).toBe("1246020766");
      expect(Object.keys(subItems[2].children).length).toBe(0);
    }
  }
});
