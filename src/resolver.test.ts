import { Resolver } from './resolver';


describe('resolve mayume puzzle', () => {

  // パズルのルール
  // パズルは基本5*4
  // 使えないマスがある
  // 赤、青、緑のクリスタル
  // 赤→青→緑の繰り返しで色が変わる
  // 周りに派生
  // すべて赤にしたらクリア


  // 入力 tsc *gb** *grgb rgrr* **bb*
  // 赤: r, 青: b, 緑: g, なにもない: * で表す
  // 出力 => ?
  // 内部では、赤: 0, 青: 1, 緑: 2, なにもない: * で表す？
  // 最小組み合わせ回数？を入れたほうが良さそう

  test('2x2で１回で解決する場合', () => {
    let puzzle: string[][] = [['r', 'g'],
                              ['g', 'g']];
    let answer: number[][] = [[1, 1]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  test('使えないマスがある場合', () => {
    let puzzle: string[][] = [['*', 'g'],
                              ['g', 'g']];
    let answer: number[][] = [[1, 1]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  test('4x5の場合', () => {
    let puzzle: string[][] = [['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'g', 'r', 'r'],
                              ['r', '*', 'g', 'g', 'r']];
    let answer: number[][] = [[3, 2]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  xtest('２回以上押すことが必要な場合', () => {
    let puzzle: string[][] = [['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'r', 'r', 'r'],
                              ['r', 'r', 'b', 'r', 'r'],
                              ['r', '*', 'b', 'b', 'r']];
    let answer: number[][] = [[3, 2], [3, 2]];
    expect(new Resolver(puzzle).solve()).toEqual(answer);
  });

  // TODO: 押そうとしてるところが*だったらスキップする
});

