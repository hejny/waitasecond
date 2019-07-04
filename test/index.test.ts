import { Awesome } from '../src/classes/Awesome';

test('Awesome', () => {
    const awesome = new Awesome();

    expect(() => {
        awesome.someMethod();
    }).not.toThrowError();
});
