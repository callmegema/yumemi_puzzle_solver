import { NumberOfEvents } from './number_of_events';


describe('number_of_events', () => {

  test('repeatedPermutation', () => {
    let arr: number[] = [0, 1, 2];
    let result: number[][] = [[ 0, 0 ], [ 0, 1 ],[ 0, 2 ], [ 1, 0 ],[ 1, 1 ], [ 1, 2 ],[ 2, 0 ], [ 2, 1 ], [ 2, 2 ]];
    expect(new NumberOfEvents().repeatedPermutation(arr, 2)).toEqual(result);
  });

  test('repeatedCombination', () => {
    let arr: number[] = [0, 1, 2];
    let result: number[][] = [[ 0, 0 ], [ 0, 1 ],[ 0, 2 ], [ 1, 1 ], [ 1, 2 ], [ 2, 2 ]];
    let generator = new NumberOfEvents().repeatedCombination(arr, 2);
    expect(generator.next().value).toEqual(result[0]);
    expect(generator.next().value).toEqual(result[1]);
    expect(generator.next().value).toEqual(result[2]);
    expect(generator.next().value).toEqual(result[3]);
    expect(generator.next().value).toEqual(result[4]);
    expect(generator.next().value).toEqual(result[5]);
    expect(generator.next().value).toEqual(undefined);
  });
});
