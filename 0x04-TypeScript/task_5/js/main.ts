// task_5/js/main.ts

// Define branded interfaces for Major and Minor credits
export interface MajorCredits {
  credits: number;
  brand: 'major';
}

export interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Sum functions that return the correct branded type
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'major' };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'minor' };
}
