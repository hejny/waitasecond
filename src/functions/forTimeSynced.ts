import { forTime } from './forTime.js';

/**
 * This waiter function will sync some action to some precise time
 * @param period looping period in milliseconds
 * @param shift according to current time in milliseconds
 */
export async function forTimeSynced(
    period: number,
    shift: number = 0,
): Promise<void> {
    const currentTime = new Date().getTime();
    const wait = period - ((currentTime - shift) % period);
    await forTime(wait);
}
