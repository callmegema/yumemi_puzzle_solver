import { Greeter } from './greeter';

test('test', () => {
    expect(new Greeter('Taro').getMessage()).toBe('Hello Taro');
});