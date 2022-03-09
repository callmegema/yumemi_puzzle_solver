import { Resolver } from './resolver'

function createPuzzle(patterns: string[]): string[][] {
  let puzzle = [...Array(patterns.length)]
  for (let i = 0; i < patterns.length; i++) {
    let str = patterns[i];
    puzzle[i] = str.split('');
  }
  return puzzle;
}

function visualize(puzzle: string[][], answer: number[][]): number[][] | string {
  if (answer[0].length === 0) return 'no answer';

  let generate2DArray2 = (m: number, n: number, val = 0): number[][] => {
    return [...Array(m)].map(_ => Array(n).fill(val));
  }
  let arr = generate2DArray2(puzzle.length, puzzle[0].length);
  for (let clickPosition of answer) {
    arr[clickPosition[0]][clickPosition[1]] += 1;
  }
  return arr;
}

let min = parseInt(process.argv[2]);
let inputPatterns = process.argv.filter((arg, i) => i >= 3);
let puzzle = createPuzzle(inputPatterns);
let answer = new Resolver(puzzle, min, min).solve();
console.log(visualize(puzzle, answer));
