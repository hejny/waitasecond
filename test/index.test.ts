import { forTime } from '../src/functions/forTime';

// TODO: Actually I do not know what is the best way how to test library of this type

test('WaitASecond', () => {
    expect(async () => {
        await forTime(10);
    }).not.toThrowError();

    // TODO: Make test cover
});
