# eslint-plugin-servicenow

This plugin contains rules that help enforce ServiceNow best practices.
It also guards against using unsupported JavaScript features, such as Promises, async/await, and BigInt (see: [JavaScript engine feature support](https://docs.servicenow.com/bundle/utah-api-reference/page/script/JavaScript-engine-upgrade/reference/javascript-engine-feature-support.html#d24837e1209)).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```shell
npm i eslint --save-dev
```

Next, install `eslint-plugin-servicenow`:

```shell
npm install eslint-plugin-servicenow --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-servicenow` globally.

## Usage

Add `servicenow` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "servicenow"
    ]
}
```

### Using the Recommended Configuration

To enable the recommended rules, extend your .eslintrc:

```javascript
{
"extends": ["plugin:servicenow/recommended"]
}
```

### Manual Setup

Specify individual rules under the rules section:

```json
{
"rules": {
  "servicenow/no-hardcoded-sysids": "warn",
  "servicenow/no-at-method": "warn",
  "servicenow/no-promise": "warn",
  "servicenow/no-weak-references": "warn",
  ...
  }
}
```

## List of **Rules**

### `servicenow/no-hardcoded-sysids`

Warns against hardcoded sys_ids.

#### Invalid

```javascript
var id = "0329a956a9bb0000b0a7619be1050e41";
```

#### Valid

```javascript
var id = getSysID();
```

### `servicenow/no-at-method`

Warns against using the `.at()` method as it's not fully supported by ServiceNow.

#### Invalid

```javascript
arr.at(1);
typedArr.at(1);
'hello'.at(1);
```

#### Valid

```javascript
'hello'.charAt(1);
arr[1];
arr.slice(1,2);
```

### `servicenow/no-promise`

Warns against using Promises.

#### Invalid

```javascript
new Promise((resolve, reject) => {});
```

### `servicenow/no-weak-references`

Warns against weak references.

#### Invalid

```javascript
new WeakMap();
```

#### Valid

```javascript
new Map();
```

### `servicenow/no-async-await`

Warns against using async/await syntax.

#### Invalid

```javascript
async function myFunc() {
  await someFunction();
}
```

### `servicenow/no-async-iterators`

Warns against using async iterators.

****#### Invalid:

```javascript
for await (let item of asyncIterable) {}
```

#### Valid

```javascript
for (let item of iterable) {}
```

### `servicenow/no-bigint-and-dataview`

Warns against using BigInt.

#### Invalid

```javascript
const bigInt = 123n;
```

#### Valid

```javascript
const number = 123;
```

### `servicenow/no-date-tojson`

Warns against using `Date.prototype.toJSON()`.

#### Invalid

```javascript
const date = new Date();
const jsonDate = date.toJSON();
```

#### Valid

```javascript
const date = new Date();
const stringDate = date.toString();
```

### `servicenow/no-packages-calls`

Disallows certain package calls.

#### Invalid

```javascript
const result = Packages.com.glide.Glide.someMethod();
```

#### Valid

```javascript
const result = Glide.someMethod();
```

### `servicenow/no-private-class-methods`

Disallows the use of private class methods.

#### Invalid

```javascript
class MyClass {
  #myPrivateMethod() {}
}
```

#### Valid

```javascript
class MyClass {
  myPublicMethod() {}
}
```

### `servicenow/no-proxy-internal-calls`

Warns against internal proxy calls.

#### Invalid

```javascript
const p = new Proxy(target, handler);
```

#### Valid

```javascript
const obj = { prop: value };
```

### `servicenow/no-regexp-lookbehind`

Warns against using RegExp lookbehind assertions.

#### Invalid

```javascript
const regex = /(?<=@)\\w+/;
```

#### Valid

```javascript
const regex = /@\\w+/;
```

### `servicenow/no-setprototypeof`

Disallows the use of `Object.setPrototypeOf`.

#### Invalid

```javascript
Object.setPrototypeOf(obj, prototype);
```

#### Valid

```javascript
const newObj = Object.create(prototype);
```

### `servicenow/no-shared-memory-atomics`

Disallows the use of shared memory and atomics.

#### Invalid

```javascript
Atomics.add(sharedArray, index, value);
```

#### Valid

```javascript
array[index] = value;
```

### `servicenow/no-typed-arrays`

Disallows the use of Typed Arrays and DataView methods for typed arrays.

#### Invalid

```js
const int8 = new Int8Array();
const data = new DataView(buffer);
data.getInt8(0);
```

#### Valid

```js
const regularArray = [1, 2, 3];
const obj = { byte: 8 };
```
