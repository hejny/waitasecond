import { forTime } from '../src/main';

test('WaitASecond', () => {
    expect(async () => {
        await forTime(10);
    }).not.toThrowError();

    // TODO: Make test cover
});
