<p align="center">
  <img src="https://i.imgur.com/oMec7S1.gif"  alt="litt">
  <br>
  <b>litt</b>: tiniest 128b javascript event emitter / pubsub in the world.
  <br>
</p>


## Why Litt?

- **Atomic:** weighs 128 bytes gzipped
- **Useful:** Is nearly 2x smaller than [mitt](https://github.com/developit/mitt)!
- **Familiar:** same names & ideas as [Node's EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)
- **Functional:** methods don't rely on `this`
- **Great Name:** This pubsub event emitter is *lit*t af. Because L comes before M so not just its filesize is smaller, but also its name's ordinality.

> Litt was made for all ES6 JavaScript platforms.

# Even though Litt works fine IT'S A JOKE guys. Please don't use this for production. Or probably anything.

* * *


## Usage

After installing via `npm install --save litt`:

```js
import litt from 'litt'

let emitter = litt()

// listen to an event
emitter.on('foo', e => console.log('foo', e) )

// listen to all events
emitter.on('*', (type, e) => console.log(type, e) )

// fire an event
emitter.emit('foo', { a: 'b' })

// working with handler references:
function onFoo() {}
emitter.on('foo', onFoo)   // listen
emitter.off('foo', onFoo)  // unlisten
```

* * *

## API

### litt

Litt: Tiniest (128b) functional event emitter / pubsub in the world.

Returns **Litt** 

#### on

Register an event handler for the given type.

**Parameters**

-   `type` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Type of event to listen for, or `"*"` for all events
-   `handler` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Function to call in response to the given event

#### off

Remove an event handler for the given type.

**Parameters**

-   `type` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Type of event to unregister `handler` from, or `"*"`
-   `handler` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Handler function to remove

#### emit

Invoke all handlers for the given type.
If present, `"*"` handlers are invoked prior to type-matched handlers.

**Parameters**

-   `type` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The event type to invoke
-   `event` **\[Any]** An event object, passed to each handler
