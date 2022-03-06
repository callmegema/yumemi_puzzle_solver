export class Resolver {
  constructor(private puzzle: string[][]) {}

  solve() {
    let patterns = this.getPatterns(this.puzzle);

    for(let pattern of patterns){
      console.log('pattern', pattern);

      let newPuzzle = this.press(pattern);
      console.log('result', newPuzzle);
      if (!this.checkResult(newPuzzle)) {
        continue
      }
      return pattern;
    }
  }

  protected getPatterns(puzzle: string[][]): number[][][] {
    let arr = [...Array(this.puzzle[0].length).keys()];
    return this.repeatedPermutation(arr, 2).map((p) => [p]);
  }

  protected repeatedPermutation(array: readonly number[], n: number): number[][] {
    if (n < 0) return [];
    if (n === 0) return [[]];

    const result: number[][] = [];
    for (let i = 0; i < array.length; i++) {
      result.push(...this.repeatedPermutation(array, n - 1).map((sub) => [array[i], ...sub]));
    }
    return result;
  }

  protected press(pattern: number[][]): string[][] {
    let newPuzzle = JSON.parse(JSON.stringify(this.puzzle));
    console.log('original', newPuzzle);
    // 押す
    let x = pattern[0][0];
    let y = pattern[0][1];
    // 派生
    // 中央
    let v = newPuzzle[x][y];

    // 押そうとしてるところが*だったらスキップする
    // if (v === '*') return newPuzzle;
    newPuzzle[x][y] = this.changeColor(v);
    // 左
    if (y - 1 >= 0) {
      let v = newPuzzle[x][y - 1];
      newPuzzle[x][y - 1] = this.changeColor(v);
    }
    // 上
    if (x - 1 >= 0) {
      let v = newPuzzle[x - 1][y];
      newPuzzle[x - 1][y] = this.changeColor(v);
    }
    // 右
    if (y + 1 < this.puzzle[0].length) {
      let v = newPuzzle[x][y + 1];
      newPuzzle[x][y + 1] = this.changeColor(v);
    }
    // 下
    if (x + 1 < this.puzzle.length) {
      let v = newPuzzle[x + 1][y];
      newPuzzle[x + 1][y] = this.changeColor(v);
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
      case '*': {
        return '*'
      }
    }
  }

  protected checkResult(puzzle: string[][]): boolean {
    let result = true;
    outer:
    for(let low of puzzle){
      if (low.filter((v: string) => v !== 'r' && v !== '*').length > 0) {
        result = false;
        break outer;
      }
    }
    return result;
  }
}
