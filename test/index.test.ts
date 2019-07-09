import { forTime } from '../src';

test('WaitSecond', () => {
    expect(async () => {
        await forTime(10);
    }).not.toThrowError();

    // TODO: Make test cover
});
