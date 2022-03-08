import { Resolver } from './resolver';


describe('resolve mayume puzzle', () => {

  // パズルのルール
  // パズルは基本4x5
  // 赤、青、緑のクリスタル
  // クリックすると赤→青→緑の繰り返しで色が変わる
  // 上下左右に派生
  // 使えないマスあり、押せない
  // すべて赤にしたらクリア


  // 入力 tsc *gb** *grgb rgrr* **bb*
  // 赤: r, 青: b, 緑: g, 無: * で表す
  // 出力 => ?
  // 最小組み合わせ回数？を入れたほうが良さそう

  // 拡張メソッド
  // CLI化

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
    let puzzle: string[][] = [['g', '*', 'b', '*', 'b'],
                              ['r', 'g', 'g', 'r', 'r'],
                              ['r', 'b', 'b', 'g', 'b'],
                              ['r', '*', 'r', '*', 'g']];
    let answer: number[][] = [[ 0, 0, 1, 0, 0 ],
                              [ 0, 0, 1, 0, 1 ],
                              [ 1, 0, 0, 1, 0 ],
                              [ 0, 0, 1, 0, 0 ]];
    expect(new Resolver(puzzle, 8, 8).solve()).toEqual(answer);
  });
});

