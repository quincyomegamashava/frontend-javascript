// task_5/js/main.ts

// Interface for MajorCredits with a brand for nominal typing
interface MajorCredits {
  credits: number;
  // Brand property to uniquely identify MajorCredits
  _majorCreditBrand: void;
}

// Interface for MinorCredits with a brand for nominal typing
interface MinorCredits {
  credits: number;
  // Brand property to uniquely identify MinorCredits
  _minorCreditBrand: void;
}

/**
 * Sums the credits of two MajorCredits subjects.
 * @param subject1 The first MajorCredits subject.
 * @param subject2 The second MajorCredits subject.
 * @returns A MajorCredits object representing the sum of credits.
 */
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorCreditBrand: undefined, // Assign undefined to the brand property
  };
}

/**
 * Sums the credits of two MinorCredits subjects.
 * @param subject1 The first MinorCredits subject.
 * @param subject2 The second MinorCredits subject.
 * @returns A MinorCredits object representing the sum of credits.
 */
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorCreditBrand: undefined, // Assign undefined to the brand property
  };
}

// Example Usage:
const majorSubjectA: MajorCredits = { credits: 3, _majorCreditBrand: undefined };
const majorSubjectB: MajorCredits = { credits: 4, _majorCreditBrand: undefined };
const minorSubjectX: MinorCredits = { credits: 1, _minorCreditBrand: undefined };
const minorSubjectY: MinorCredits = { credits: 2, _minorCreditBrand: undefined };

const totalMajorCredits = sumMajorCredits(majorSubjectA, majorSubjectB);
const totalMinorCredits = sumMinorCredits(minorSubjectX, minorSubjectY);

console.log('Total Major Credits:', totalMajorCredits.credits); // Expected: 7
console.log('Total Minor Credits:', totalMinorCredits.credits); // Expected: 3

// Demonstrating nominal typing:
// This would cause a TypeScript error because MajorCredits is not assignable to MinorCredits
// const invalidSum: MinorCredits = sumMajorCredits(majorSubjectA, majorSubjectB);

