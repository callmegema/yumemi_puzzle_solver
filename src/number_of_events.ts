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

  * repeatedCombination<T>(array: readonly T[], n: number): any {
    if (n < 0) return [];
    if (n === 0) return [[]];

    let indexes = Array(n).fill(0);
    yield indexes.map((v) => array[v]);
    let numOfEvents: number = this.factorialize(array.length + n - 1) / (this.factorialize(n) * this.factorialize(array.length - 1));

    for (let i = 1; i < numOfEvents; i++) {
      let last = this.findLastIndex(indexes, ((v) => v < (array.length - 1)));
      indexes[last] += 1;

      for (let j = last; j < indexes.length; j++) {
        indexes[j] = indexes[last];
      }
      yield indexes.map((v) => array[v]);
    }
  }

  protected findLastIndex<T>(array: Array<T>, predicate: (value: T, index: number, obj: T[]) => boolean): number {
    let l = array.length;
    while (l--) {
      if (predicate(array[l], l, array))
        return l;
    }
    return -1;
  }

  protected factorialize(n: number): number {
    if (n === 0) return 1;
    return n * this.factorialize(n-1);
  }
}
