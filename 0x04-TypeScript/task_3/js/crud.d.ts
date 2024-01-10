// crud.d.ts

// Import RowID and RowElement from interface.ts
/// <reference path="./interface.ts" />

// Declare type declarations for each crud function
declare module CRUD {
  function insertRow(row: RowElement): RowID;
  function deleteRow(rowId: RowID): void;
  function updateRow(rowId: RowID, row: RowElement): RowID;
}
