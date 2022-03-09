export class Resolver {

  protected blankMark: string = '#';

  constructor(private puzzle: string[][], private min: number = 1, private max: number = 10) {}

  solve(): number[][] {
    for (let i = this.min; i <= this.max; i++) {
      let patterns = this.getPatterns(this.puzzle, i);

      for (let pattern of patterns){
        let newPuzzle = this.press(pattern);

        if (!this.checkResult(newPuzzle)) {
          continue
        }
        return pattern;
      }
    }
    return [[]];
  }

  protected getPatterns(puzzle: string[][], n: number): number[][][] {
    let arr = [...Array(this.puzzle[0].length).keys()];
    let clickPattern = this.repeatedPermutation(arr, 2)
                              .filter((p) => p[0] < this.puzzle.length && p[1] < this.puzzle[0].length)
                              .filter((p) => this.puzzle[p[0]][p[1]] !== this.blankMark);
    return this.repeatedCombination(clickPattern, n);;
  }

  protected repeatedCombination<T>(array: readonly T[], n: number): T[][] {
    if (n < 0) return [];
    if (n === 0) return [[]];

    const result: T[][] = [];
    for (let i = 0; i < array.length; i++) {
      result.push(...this.repeatedCombination(array.slice(i), n - 1).map((sub) => [array[i], ...sub]));
    }
    return result;
  }

  protected repeatedPermutation<T>(array: readonly T[], n: number): T[][] {
    if (n < 0) return [];
    if (n === 0) return [[]];

    const result: T[][] = [];
    for (let i = 0; i < array.length; i++) {
      result.push(...this.repeatedPermutation(array, n - 1).map((sub) => [array[i], ...sub]));
    }
    return result;
  }

  protected press(pattern: number[][]): string[][] {
    let newPuzzle = JSON.parse(JSON.stringify(this.puzzle));
    // 押す
    for (let positionSet of pattern){
      let y = positionSet[0];
      let x = positionSet[1];
      // 中央
      let v = newPuzzle[y][x];
      newPuzzle[y][x] = this.changeColor(v);
      // 左
      if (x - 1 >= 0) {
        let v = newPuzzle[y][x - 1];
        newPuzzle[y][x - 1] = this.changeColor(v);
      }
      // 上
      if (y - 1 >= 0) {
        let v = newPuzzle[y - 1][x];
        newPuzzle[y - 1][x] = this.changeColor(v);
      }
      // 右
      if (x + 1 < this.puzzle[0].length) {
        let v = newPuzzle[y][x + 1];
        newPuzzle[y][x + 1] = this.changeColor(v);
      }
      // 下
      if (y + 1 < this.puzzle.length) {
        let v = newPuzzle[y + 1][x];
        newPuzzle[y + 1][x] = this.changeColor(v);
      }
    }
    return newPuzzle;
  }

  protected changeColor(color: string): string | undefined {
    switch(color) {
      case 'r': {
        return 'b'
      }
      case 'b': {
        return 'g'
      }
      case 'g': {
        return 'r'
      }
      case this.blankMark: {
        return this.blankMark
      }
    }
  }

  protected checkResult(puzzle: string[][]): boolean {
    let result = true;
    outer:
    for (let low of puzzle){
      if (low.filter((v: string) => v !== 'r' && v !== this.blankMark).length > 0) {
        result = false;
        break outer;
      }
    }
    return result;
  }
}
