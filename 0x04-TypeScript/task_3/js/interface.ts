// interface.ts

// Create a type RowID and set it equal to number
export type RowID = number;

// Create an interface RowElement that contains these 3 fields
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional age field
}
