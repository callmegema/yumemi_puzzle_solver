export class NumberOfEvents {

  repeatedPermutation<T>(array: readonly T[], n: number): T[][] {
    if (n < 0) return [];
    if (n === 0) return [[]];

    const result: T[][] = [];
    for (let i = 0; i < array.length; i++) {
      result.push(...this.repeatedPermutation(array, n - 1).map((sub) => [array[i], ...sub]));
    }
    return result;
  }

  repeatedCombination<T>(array: readonly T[], n: number): T[][] {
    if (n < 0) return [];
    if (n === 0) return [[]];

    const result: T[][] = [];
    for (let i = 0; i < array.length; i++) {
      result.push(...this.repeatedCombination(array.slice(i), n - 1).map((sub) => [array[i], ...sub]));
    }
    return result;
  }
}
