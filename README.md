# ⏰ Waitasecond

Waitasecond is an extremely simple and elegant tool for using **working with async code and [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)**. It is usable by browser, worker and node environment and fully typed.

# 🔥 Install

Install from [NPM](https://www.npmjs.com/package/waitasecond)

```bash
npm i waitasecond
```

## 🕛 Await forTime _([setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) equivalent)_

In JavaScript there is very elegant syntax to write asynchronous code with **async/await**. Every internal function and library is heading forward to be compatible with Promises and deprecating its old callback type.  
But there are some **relicts from [callback hell](http://callbackhell.com/)** like **setTimeout, requestAnimationFrame,...**. Waitasecond has motivation to turn this into elegant syntax:

```typescript
import { forTime } from 'waitasecond';

console.log(`⏳ This is logged immediatelly.`);
await forTime(500);
console.log(`⌛ And this after 500 miliseconds.`);
await forTime(666);
console.log(`😈 Wow, I have escaped from callback hell`);
```

## 🕧 Await forImmediate _([setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate) equivalent)_

```typescript
import { forImmediate } from 'waitasecond';

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

_Note: Despite window.setImmediate is non-standard feature and it is not working in node, function **forImmediate is working in all environments**_
_Note: If you want to use equivalent of [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), see [https://rxjs.dev/api/index/function/interval)._

## 🕐 Await forAnimationFrame _([requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) equivalent)_

With forAnimationFrame you can write nice looking **render**/update/whatever **loops**.

```typescript
import { forAnimationFrame } from 'waitasecond';

while (
    true /* ← Normally this would be 💩 code but with forAnimationFrame it is nicer syntax version of requestAnimationFrame*/
) {
    const now = await forAnimationFrame();

    updateScene(now);
    renderScene(now);
}
```

_Note: This is working only in browser environment._

## 🕜 Await forEver

Returns promise which never resolves or rejects. It is elegant way to test what happen if some part of async code stucks (for example some fetch call).

```typescript
import { forEver } from 'waitasecond';

await forEver();
console.log(`🧟 This will never ever happen.`);
```

## 🕑 Await forTimeSynced

**forTimeSynced** is ideal way how to do periodical ticking with unstable environment which is randomly restarted. For example if you want to run some process every 10 minutes on server but server can be restarted by some instace manager like PM2.

```typescript
import { forTimeSynced } from 'waitasecond';

while (true) {
    await forTimeSynced(10 /* Minutes */ * 60 * 1000);
    console.log(
        `⌛ This will be logged every 10 minutes according to computer time. So it fires for example on 12:00, 12:10, 12:20,...`,
    );
}
```

## 🕝 Await forValueDefined

```typescript
import { forValueDefined } from 'waitasecond';

const firstName = forValueDefined(() => data.firstName);
```

_Note: This is not definitelly ideal way how to wait for things. But it can be helpfull if you want to "observe" some mutating object which do not support it natively._

## 🕒 Await forAllImagesInElement

```typescript
import { forAllImagesInElement } from 'waitasecond';

await forAllImagesInElement(document.body);
console.log(`🖼️ Now I can be sure that all images in body are loaded.`);

// ...
await renderToPdf(document.body);
// ...
```

# 🖋️ Contributing

I am opened to your pull requests, feedback, suggestions and donations. Contact to me is on my [personal page](https://www.pavolhejny.com)
