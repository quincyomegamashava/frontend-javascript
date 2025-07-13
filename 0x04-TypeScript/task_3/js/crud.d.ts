// crud.d.ts

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from '../interface'; // Adjust path as necessary based on your folder structure

declare module './crud' { // Declares types for the 'crud.js' module
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
