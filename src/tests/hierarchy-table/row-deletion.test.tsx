import "@testing-library/jest-dom";

import { App } from "@/App";
import { store } from "@/stores/store";
import { render, waitFor } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { Provider } from "jotai";
import { beforeEach, describe, expect, it } from "vitest";

const selectors = {
  type_row: '[data-type="hierarchy-table-row"]',
  type_expand_cell: '[data-type="hierarchy-table-expand-cell"]',
  type_delete_cell: '[data-type="hierarchy-table-delete-cell"]',
  type_empty_list_message: '[data-type="empty-list-message"]',
  identifier_person: '[data-identifier="person"]',
  identifier_nemesis: '[data-identifier="nemesis"]',
  identifier_secrete: '[data-identifier="secrete"]',
};

describe("test_count_person_rows", () => {
  let container: HTMLElement;

  beforeEach(async () => {
    const result = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    container = result.container;

    await waitFor(
      () => {
        const rows = getRows({ container, lookup: [selectors.type_row] });

        if (rows.length === 0) throw new Error("No rows found yet");

        expect(rows.length).toBeGreaterThan(0);
      },
      { timeout: 3000 },
    );
  });

  it("checks that 11 person rows are rendered", async () => {
    const personRows = getRows({
      container,
      lookup: [selectors.type_row, selectors.identifier_person],
    });

    expect(personRows).toHaveLength(11);
  });
});

describe("test_count_nemesis_rows", () => {
  let container: HTMLElement;
  let user: ReturnType<typeof userEvent.setup>;
  let personRows: NodeListOf<Element>;
  let filteredPersonRows: Element[];

  beforeEach(async () => {
    const renderResult = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    container = renderResult.container;
    user = userEvent.setup();

    await waitFor(
      () => {
        const rows = getRows({ container, lookup: [selectors.type_row] });

        if (rows.length === 0) throw new Error("No rows found yet");
      },
      { timeout: 3000 },
    );

    personRows = getRows({
      container,
      lookup: [selectors.type_row, selectors.identifier_person],
    });
    filteredPersonRows = getFilteredRows({
      rows: personRows,
      lookup: [selectors.type_expand_cell],
    });
  });

  it("checks that 13 nemesis rows are rendered", async () => {
    if (filteredPersonRows.length === 0) {
      throw new Error("No person row with expand cell and button found");
    }

    for (const row of filteredPersonRows) {
      await clickOnButton$({ row, user, lookup: [selectors.type_expand_cell] });
    }

    await waitFor(
      () => {
        const nemesisRows = getRows({
          container,
          lookup: [selectors.type_row + selectors.identifier_nemesis],
        });

        if (nemesisRows.length === 0) {
          throw new Error("No nemesis rows found after expansion");
        }

        expect(nemesisRows).toHaveLength(13);
      },
      { timeout: 3000 },
    );
  });
});

describe("test_count_secrete_rows", () => {
  let container: HTMLElement;
  let user: ReturnType<typeof userEvent.setup>;
  let personRows: NodeListOf<Element>;
  let filteredPersonRows: Element[];
  let nemesisRows: NodeListOf<Element>;
  let filteredNemesisRows: Element[];

  beforeEach(async () => {
    const renderResult = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    container = renderResult.container;
    user = userEvent.setup();

    await waitFor(
      () => {
        const rows = getRows({ container, lookup: [selectors.type_row] });

        if (rows.length === 0) throw new Error("No rows found yet");
      },
      { timeout: 3000 },
    );

    personRows = getRows({
      container,
      lookup: [selectors.type_row, selectors.identifier_person],
    });
    filteredPersonRows = getFilteredRows({
      rows: personRows,
      lookup: [selectors.type_expand_cell],
    });

    for (const row of filteredPersonRows) {
      await clickOnButton$({ row, user, lookup: [selectors.type_expand_cell] });
    }

    nemesisRows = getRows({
      container,
      lookup: [selectors.type_row + selectors.identifier_nemesis],
    });
    filteredNemesisRows = getFilteredRows({
      rows: nemesisRows,
      lookup: [selectors.type_expand_cell],
    });

    await waitFor(
      () => {
        if (nemesisRows.length === 0) {
          throw new Error("No nemesis rows found after person row expansion");
        }
      },
      { timeout: 3000 },
    );
  });

  it("check that 25 secrete rows are rendered", async () => {
    if (filteredNemesisRows.length === 0) {
      throw new Error("No nemesis row with expand cell and button found");
    }

    for (const row of filteredNemesisRows) {
      await clickOnButton$({ row, user, lookup: [selectors.type_expand_cell] });
    }

    await waitFor(
      () => {
        const secreteRows = getRows({
          container,
          lookup: [selectors.type_row + selectors.identifier_secrete],
        });

        if (secreteRows.length === 0) {
          throw new Error("No secrete rows found after nemesis row expansion");
        }

        expect(secreteRows).toHaveLength(25);
      },
      { timeout: 3000 },
    );
  });
});

describe("test_delete_rows", () => {
  let container: HTMLElement;
  let user: ReturnType<typeof userEvent.setup>;
  let personRows: NodeListOf<Element>;
  let filteredPersonRows: Element[];
  let allPersonRows: Element[];
  let nemesisRows: NodeListOf<Element>;
  let filteredNemesisRows: Element[];
  let secreteRows: NodeListOf<Element>;
  let filteredSecreteRows: Element[];

  beforeEach(async () => {
    const renderResult = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    container = renderResult.container;
    user = userEvent.setup();

    await waitFor(
      () => {
        const rows = container.querySelectorAll(selectors.type_row);

        if (rows.length === 0) throw new Error("No rows found yet");
      },
      { timeout: 3000 },
    );

    personRows = getRows({
      container,
      lookup: [selectors.type_row, selectors.identifier_person],
    });
    filteredPersonRows = getFilteredRows({
      rows: personRows,
      lookup: [selectors.type_expand_cell],
    });
    allPersonRows = getFilteredRows({
      rows: personRows,
      lookup: [selectors.type_delete_cell],
    });

    for (const row of filteredPersonRows) {
      await clickOnButton$({ row, user, lookup: [selectors.type_expand_cell] });
    }

    nemesisRows = getRows({
      container,
      lookup: [selectors.type_row + selectors.identifier_nemesis],
    });
    filteredNemesisRows = getFilteredRows({
      rows: nemesisRows,
      lookup: [selectors.type_expand_cell],
    });

    await waitFor(
      () => {
        if (nemesisRows.length === 0) {
          throw new Error("No nemesis rows found after person row expansion");
        }
      },
      { timeout: 3000 },
    );

    for (const row of filteredNemesisRows) {
      await clickOnButton$({ row, user, lookup: [selectors.type_expand_cell] });
    }

    await waitFor(
      () => {
        const secreteRowsTemp = container.querySelectorAll(
          selectors.type_row + selectors.identifier_secrete,
        );

        if (secreteRowsTemp.length === 0) {
          throw new Error("No secrete rows found after nemesis row expansion");
        }
      },
      { timeout: 3000 },
    );

    secreteRows = getRows({
      container,
      lookup: [selectors.type_row + selectors.identifier_secrete],
    });
    filteredSecreteRows = getFilteredRows({
      rows: secreteRows,
      lookup: [selectors.type_delete_cell],
    });
  });

  it("deletes all secrete rows and verified count is 0", async () => {
    if (filteredSecreteRows.length === 0) {
      throw new Error("No secrete row with delete cell and button found");
    }

    for (const _ of filteredSecreteRows) {
      const rows = getRows({
        container,
        lookup: [selectors.type_row + selectors.identifier_secrete],
      });

      if (rows.length === 0) break;

      const filtered = getFilteredRows({
        rows,
        lookup: [selectors.type_delete_cell],
      });

      await clickOnButton$({
        row: filtered[0],
        user,
        lookup: [selectors.type_delete_cell],
      });
    }

    await waitFor(
      () => {
        const rows = getRows({
          container,
          lookup: [selectors.type_row, selectors.identifier_secrete],
        });

        expect(rows).toHaveLength(0);
      },
      { timeout: 3000 },
    );
  });

  it("deletes all nemesis rows and verified count is 0", async () => {
    if (filteredNemesisRows.length === 0) {
      throw new Error("No nemesis row with delete cell and button found");
    }

    for (const _ of filteredNemesisRows) {
      const rows = getRows({
        container,
        lookup: [selectors.type_row + selectors.identifier_nemesis],
      });

      if (rows.length === 0) break;

      const filtered = getFilteredRows({
        rows,
        lookup: [selectors.type_delete_cell],
      });

      await clickOnButton$({
        row: filtered[0],
        user,
        lookup: [selectors.type_delete_cell],
      });
    }

    await waitFor(
      () => {
        const rows = getRows({
          container,
          lookup: [selectors.type_row, selectors.identifier_secrete],
        });

        expect(rows).toHaveLength(0);
      },
      { timeout: 3000 },
    );
  });

  it("deletes all person rows and verified count is 0", async () => {
    if (allPersonRows.length === 0) {
      throw new Error("No person row with delete cell and button found");
    }

    for (const _ of allPersonRows) {
      const rows = getRows({
        container,
        lookup: [selectors.type_row + selectors.identifier_person],
      });

      if (rows.length === 0) break;

      const filtered = getFilteredRows({
        rows,
        lookup: [selectors.type_delete_cell],
      });

      await clickOnButton$({
        row: filtered[0],
        user,
        lookup: [selectors.type_delete_cell],
      });
    }

    await waitFor(
      () => {
        const rows = getRows({
          container,
          lookup: [selectors.type_row, selectors.identifier_person],
        });

        expect(rows).toHaveLength(0);
      },
      { timeout: 3000 },
    );

    await waitFor(() => {
      const emptyMsg = container.querySelector(
        selectors.type_empty_list_message,
      );
      expect(emptyMsg).toBeInTheDocument();
      expect(emptyMsg).toHaveTextContent("List is empty 😭");
    });
  });
});

const getRows = ({
  container,
  lookup,
}: {
  container: HTMLElement;
  lookup: string[];
}) => {
  return container.querySelectorAll(lookup.join(""));
};

const getFilteredRows = ({
  rows,
  lookup,
}: {
  rows: NodeListOf<Element>;
  lookup: string[];
}) => {
  return Array.from(rows).filter((row) => {
    const expandCell = row.querySelector(lookup.join(""));

    return expandCell && expandCell.querySelector("button");
  });
};

const clickOnButton$ = async ({
  row,
  user,
  lookup,
}: {
  row: Element;
  user: UserEvent;
  lookup: string[];
}) => {
  const button = row.querySelector(`${lookup.join("")} button`) as HTMLElement;

  await user.click(button);
};
