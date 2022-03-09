import { Resolver } from './resolver';


describe('resolve mayume puzzle', () => {
  // 拡張メソッド

  test('2x2で１回で解決する場合', () => {
    let puzzle: string[][] = [['r', 'g'],
                              ['g', 'g']];
    let answer: number[][] = [[0, 0],
                              [0, 1]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  test('使えないマスがある場合', () => {
    let puzzle: string[][] = [['*', 'g'],
                              ['g', 'g']];
    let answer: number[][] = [[0, 0],
                              [0, 1]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  test('4x5の場合', () => {
    let puzzle: string[][] = [['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'g', 'r', 'r'],
                              ['r', '*', 'g', 'g', 'r']];
    let answer: number[][] = [[ 0, 0, 0, 0, 0 ],
                              [ 0, 0, 0, 0, 0 ],
                              [ 0, 0, 0, 0, 0 ],
                              [ 0, 0, 1, 0, 0 ]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  test('２回以上押すことが必要な場合', () => {
    let puzzle: string[][] = [['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'b', 'r', 'r'],
                              ['r', '*', 'b', 'b', 'r']];
    let answer: number[][] = [[ 0, 0, 0, 0, 0 ],
                              [ 0, 0, 0, 0, 0 ],
                              [ 0, 0, 0, 0, 0 ],
                              [ 0, 0, 2, 0, 0 ]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  test('８回押す場合', () => {
    let puzzle: string[][] = [['*', 'b', '*', '*', '*'],
                              ['b', 'g', 'g', 'b', '*'],
                              ['*', 'b', 'g', 'r', 'g'],
                              ['*', '*', '*', 'g', '*']];
    let answer: number[][] = [[ 0, 0, 1, 0, 0 ],
                              [ 0, 0, 1, 0, 1 ],
                              [ 1, 0, 0, 1, 0 ],
                              [ 0, 0, 1, 0, 0 ]];
    expect(new Resolver(puzzle, 7, 8).solve()).toEqual(answer);
  });
});

