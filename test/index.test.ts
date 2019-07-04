import { forTime } from '../src';

test('WaitMinute', () => {
    expect(async () => {
        await forTime(10);
    }).not.toThrowError();

    // TODO: Make test cover
});
