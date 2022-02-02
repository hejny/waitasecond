# ⏰ Waitasecond

<!--Badges-->

[![License of ⏰ Waitasecond](https://img.shields.io/github/license/hejny/waitasecond.svg?style=flat)](https://github.com/hejny/waitasecond/blob/main/LICENSE)
[![NPM Version of ⏰ Waitasecond](https://badge.fury.io/js/waitasecond.svg)](https://www.npmjs.com/package/waitasecond)
[![Quality of package ⏰ Waitasecond](https://packagequality.com/shield/waitasecond.svg)](https://packagequality.com/#?package=waitasecond)
[![Known Vulnerabilities](https://snyk.io/test/github/hejny/waitasecond/badge.svg)](https://snyk.io/test/github/hejny/waitasecond)
[![Issues](https://img.shields.io/github/issues/hejny/waitasecond.svg?style=flat)](https://github.com/hejny/waitasecond/issues)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!--/Badges-->

Wait a second is an extremely simple and elegant tool for using **working with async code and [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)**. It is usable by browser, worker, and node environment and fully typed.

## 🔥 Install

Install from [NPM](https://www.npmjs.com/package/waitasecond)

```bash
npm i waitasecond
```

### 🕛 Await forTime _([setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) equivalent)_

In JavaScript, there is an elegant way how to write asynchronous code with **async/await** syntax construct. Every internal function and library is heading forward to be compatible with Promises and deprecating its old callback type.  
But there are some **relicts from [callback hell](http://callbackhell.com/)** like **setTimeout, requestAnimationFrame,...**. Waitasecond has motivation to turn this into elegant syntax:

```typescript
import { forTime } from 'waitasecond';

console.log(`⏳ This is logged immediately.`);
await forTime(500);
console.log(`⌛ And this after 500 milliseconds.`);
await forTime(666);
console.log(`😈 Wow, I have escaped from callback hell`);
```

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forTime)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forTime.ts)

### 🕧 Await forImmediate _([setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate) equivalent)_

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

_Note: Despite window.setImmediate is a non-standard feature and it is not working in node, function **forImmediate is working in all environments**_
_Note: If you want to use an equivalent of [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), see [RxJS interval](https://rxjs.dev/api/index/function/interval)._

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forImmediate)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forImmediate.ts)

### 🕐 Await forAnimationFrame _([requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) equivalent)_

With forAnimationFrame you can write nice looking **render**/update/whatever **loops**.

```typescript
import { forAnimationFrame } from 'waitasecond';

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

### 🕜 Await forEver

forEver function returns a promise which never resolves or rejects. It is an elegant way to test what happened if some part of asynchronous code stuck (for example, fetch call).

```typescript
import { forEver } from 'waitasecond';

await forEver();
console.log(`🧟 This will never ever happen.`);
```

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forEver)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forEver.ts)

### 🕑 Await forTimeSynced

**forTimeSynced** is an ideal way how to do periodical ticking in an unstable environment.
For example, if you want to run a process every 10 minutes on a server, but PM2 is restarting a server unexpectedly.

```typescript
import { forTimeSynced } from 'waitasecond';

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
import { forValueDefined } from 'waitasecond';

const firstName = forValueDefined(() => data.firstName);
```

_Note: This is not definitely the ideal way how to wait for things. But it can be helpful if you want to "observe" some mutating object which do not support it natively._

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forValueDefined)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forValueDefined.ts)

## 🕒 Await forAllImagesInElement

```typescript
import { forAllImagesInElement } from 'waitasecond';

await forAllImagesInElement(document.body);
console.log(`🖼️ Now I can be sure that all images in body are loaded.`);

// ...
await renderToPdf(document.body);
// ...
```

[📖Documentation](https://hejny.github.io/waitasecond/modules.html#forAllImagesInElement)
[💻Code](https://github.com/hejny/waitasecond/blob/main/src/functions/forAllImagesInElement.ts)

## 🖋️ Contributing

I am opened to pull requests, feedback and suggestions. Or if you like this utility, you can [☕ buy me a coffee](https://www.buymeacoffee.com/hejny) or [donate via cryptocurrencies](https://github.com/hejny/hejny/blob/main/documents/crypto.md)


## ✨ Partners


<a href="https://Collboard.com/">
    <img src="https://collboard.fra1.cdn.digitaloceanspaces.com/assets/18.12.1/logo-small.png" alt="Collboard logo" width="50"  />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://czech.events/">
    <img src="https://czech.events/design/logos/czech.events.transparent-logo.png" alt="Czech.events logo" width="50" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://sigmastamp.ml/">
    <img src="https://www.sigmastamp.ml/sigmastamp-logo.white.svg" alt="SigmaStamp logo" width="50"/>
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://www.h-edu.org/">
    <img src="https://www.h-edu.org/media/favicon.png" alt="H-edu logo" width="50"/>
</a>


[Become a partner](https://www.pavolhejny.com/contact/)



