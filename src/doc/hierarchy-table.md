# Hierarchy Table

- The API returns `HierarchyTableData`.
  - `HierarchyTableData` contains nested children of type `NemesisRecord`.
  - `NemesisRecord` contains nested children of type `SecreteRecord`.

- To obtain data of type `Person`, use `transform-hierarchy-data`, which accepts `HierarchyTableData` as input.
  - The nesting structure is preserved in a similar manner.

- The `HierarchyTable` accepts a list of type `Person[]`.
  - A `Person` contains nested children of type `Nemesis`.
  - A `Nemesis` contains nested children of type `Secrete`.
  - It uses recursive, reusable components to display tables and nested tables.
  - Each row can be deleted. Deleting a parent automatically deletes its children.
