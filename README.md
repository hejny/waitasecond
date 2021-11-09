# ⏰ Waitasecond

Wait a second is an extremely simple and elegant tool for using **working with async code and [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)**. It is usable by browser, worker, and node environment and fully typed.

# 🔥 Install

Install from [NPM](https://www.npmjs.com/package/waitasecond)

```bash
npm i waitasecond
```

## 🕛 Await forTimeout _([setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) equivalent)_

In JavaScript, there is an elegant way how to write asynchronous code with **async/await** syntax construct. Every internal function and library is heading forward to be compatible with Promises and deprecating its old callback type.
But there are some **relicts from [callback hell](http://callbackhell.com/)** like **setTimeout, requestAnimationFrame,...**. Waitasecond has motivation to turn this into elegant syntax:

```typescript
import { forTimeout } from 'waitasecond/forTimeout';

console.log(`⏳ This is logged immediately.`);
await forTimeout(500);
console.log(`⌛ And this after 500 milliseconds.`);
await forTimeout(666);
console.log(`😈 Wow, I have escaped from callback hell`);
```

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forTime)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forTime.ts)

## 🕧 Await forImmediate _([setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate) equivalent)_

```typescript
import { forImmediate } from 'waitasecond/forImmediate';

async function doSomething() {
    console.log(`🍏 foo`);
    await forImmediate();
    console.log(`🍎 bar`);
}

doSomething();
doSomething();

// 🍏 foo
// 🍏 foo
// 🍎 bar
// 🍎 bar

await doSomething();
await doSomething();

// 🍏 foo
// 🍎 bar
// 🍏 foo
// 🍎 bar
```

_Note: Despite window.setImmediate is a non-standard feature and it is not working in node, function **forImmediate is working in all environments**_
_Note: If you want to use an equivalent of [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), see [RxJS interval](https://rxjs.dev/api/index/function/interval)._

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forImmediate)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forImmediate.ts)

## 🕐 Await forAnimationFrame _([requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) equivalent)_

With forAnimationFrame you can write nice looking **render**/update/whatever **loops**.

```typescript
import { forAnimationFrame } from 'waitasecond/forAnimationFrame';

while (
    true /* ← Normally, this would be 💩 code, but with forAnimationFrame it is a nicer syntax version of requestAnimationFrame*/
) {
    const now = await forAnimationFrame();

    updateScene(now);
    renderScene(now);
}
```

_Note: This is working only in a browser environment._

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forAnimationFrame)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forAnimationFrame.ts)

## 🕜 Await forEver

forEver function returns a promise which never resolves or rejects. It is an elegant way to test what happened if some part of asynchronous code stuck (for example, fetch call).

```typescript
import { forEver } from 'waitasecond/forEver';

await forEver();
console.log(`🧟 This will never ever happen.`);
```

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forEver)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forEver.ts)

## 🕑 Await forTimeSynced

**forTimeSynced** is an ideal way how to do periodical ticking in an unstable environment.
For example, if you want to run a process every 10 minutes on a server, but PM2 is restarting a server unexpectedly.

```typescript
import { forTimeSynced } from 'waitasecond/forTimeSynced';

while (true) {
    await forTimeSynced(10 /* Minutes */ * 60 * 1000);
    console.log(
        `⌛ This will be logged every 10 minutes according to computer time. So it fires for example on 12:00, 12:10, 12:20,...`,
    );
}
```

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forTimeSynced)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forTimeSynced.ts)

## 🕝 Await forValueDefined

```typescript
import { forValueDefined } from 'waitasecond/forValueDefined';

const firstName = forValueDefined(() => data.firstName);
```

_Note: This is not definitely the ideal way how to wait for things. But it can be helpful if you want to "observe" some mutating object which do not support it natively._

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forValueDefined)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forValueDefined.ts)

## 🕒 Await forImagesReady

```typescript
import { forImagesReady } from 'waitasecond/forImagesReady';

await forImagesReady(document.body);
console.log(`🖼️ Now I can be sure that all images in body are loaded.`);

// ...
await renderToPdf(document.body);
// ...
```

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forImagesReady)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forImagesReady.ts)

# 🖋️ Contributing

I am opened to your pull requests, feedback, suggestions, and donations. Contact to me is on my [personal page](https://www.pavolhejny.com)
