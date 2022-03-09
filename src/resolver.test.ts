import { Resolver } from './resolver';


describe('resolve mayume puzzle', () => {

  test('2x2で１回で解決する場合', () => {
    let puzzle: string[][] = [['r', 'g'],
                              ['g', 'g']];
    let answer: number[][] = [[1, 1]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  test('使えないマスがある場合', () => {
    let puzzle: string[][] = [['#', 'g'],
                              ['g', 'g']];
    let answer: number[][] = [[1, 1]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  test('4x5の場合', () => {
    let puzzle: string[][] = [['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'g', 'r', 'r'],
                              ['r', '#', 'g', 'g', 'r']];
    let answer: number[][] = [[3, 2]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  test('２回以上押すことが必要な場合', () => {
    let puzzle: string[][] = [['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'b', 'r', 'r'],
                              ['r', '#', 'b', 'b', 'r']];
    let answer: number[][] = [[3, 2], [3, 2]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  test('８回押す場合', () => {
    let puzzle: string[][] = [['#', 'b', 'r', '#', '#'],
                              ['#', 'b', 'r', 'g', 'b'],
                              ['r', 'g', 'r', 'r', '#'],
                              ['#', '#', 'b', 'b', '#']];
    let answer: number[][] = [[ 0, 1 ], [ 0, 2 ],[ 1, 2 ], [ 1, 4 ],[ 1, 4 ], [ 2, 2 ],[ 2, 3 ], [ 3, 3 ]];
    expect(new Resolver(puzzle, 8, 8).solve()).toEqual(answer);
  });

  test('パズルの行の長さが同じでない場合', () => {
    let puzzle: string[][] = [['r', 'g', 'r'],
                              ['g', 'g']];
    expect(() => { new Resolver(puzzle).solve(); }).toThrow();
  });

  test('異なる文字列が含まれる場合', () => {
    let puzzle: string[][] = [['?', 'g'],
                              ['g', 'g']];
    expect(() => { new Resolver(puzzle).solve(); }).toThrow();
  });
});

