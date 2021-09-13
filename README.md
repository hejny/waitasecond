# ⏰ Waitasecond

Waitasecond is an extremely simple and elegant tool for using **working with async code and [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)**. It is usable by browser, worker and node environment and fully typed.

# 🔥 Install

Install from [NPM](https://www.npmjs.com/package/waitasecond)

```bash
npm i waitasecond
```

# 🕛 Await forTime _([setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) equivalent)_

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

🕧 Await forImmediate _([setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate) equivalent)_

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

🕐 Await forAnimationFrame _([requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) equivalent)_

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

🕜 Await forEver

Never resolves or rejects. It is elegant way to test what happen if some part of async code stucks (for example some fetch call).

```typescript
import { forEver } from 'waitasecond';

await forEver();
console.log(`🧟 This will never ever happen.`);
```

🕑 Await forTimeSynced

```typescript
import { forTimeSynced } from 'waitasecond';

while (true) {
    await forTimeSynced(10 /* Minutes */ * 60 * 1000);
    console.log(
        `⌛ This will be logged every 10 minutes according to computer time. So it fires for example on 12:00, 12:10, 12:20,...`,
    );
}
```

🕝 Await forValueDefined

```typescript
import { forValueDefined } from 'waitasecond';

// TODO: !!!
```

🕒 Await forAllImagesInElement

```typescript
import { forAllImagesInElement } from 'waitasecond';

// TODO: !!!
```

# 🖋️ Contributing

I am opened to your pull requests, feedback, suggestions and donations :) . Contact to me is on my [personal page](https://www.pavolhejny.com)
