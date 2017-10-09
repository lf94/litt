<p align="center">
  <img src="https://i.imgur.com/oMec7S1.gif"  alt="litt">
  <br>
  <b>litt</b>: tiniest 105b javascript event emitter / pubsub in the world.
  <br>
</p>


## Why Litt?

- **Sub-atomic:** weighs **105 bytes** gzipped
- **Useful:** Is nearly 2x smaller than [mitt](https://github.com/developit/mitt)!
- **Familiar:** same names & ideas as [Node's EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)
- **Functional:** methods don't rely on `this`
- **Great Name:** This pubsub event emitter is *lit*t af. Because L comes before M so not just its filesize is smaller, but also its name's ordinality.
- **Reproducible:** ```gzip -9 -n index.js && ls -l index.js.gz```

> Litt was made for all ES6 JavaScript platforms.

** Even though __**Litt works**__ - IT'S A JOKE. Please don't use this for production. Or probably anything.**

Yes I will accept pull requests to make it smaller...But you cannot change the API (on/off/emit). These names must remain.

## How to use Litt?

```js
// create empty emitter
let emitter = e()

// create a prefilled emitter
emitter = e({ foo: [d => console.log(d)] })

// listen to an event
emitter.on('foo', d => console.log(d))

// fire an event
emitter.emit('foo', 'some data')

// unlisten to an event
const onFoo = () => {}
emitter.on('foo', onFoo)
emitter.off('foo', onFoo)
```
