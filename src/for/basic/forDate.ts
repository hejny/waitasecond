import { forTimeout } from './forTimeout';

export async function forDate(date: Date): Promise<void> {
    const remainingMiliseconds = date.getTime() - new Date().getTime();

    if (remainingMiliseconds < 0) {
        return;
    }

    await forTimeout(remainingMiliseconds);
}

// !!! Documentation for every exported entity
// !!! To samples
// !!! To README
