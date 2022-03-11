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
    expect(new NumberOfEvents().repeatedCombination(arr, 2)).toEqual(result);
  });
});

