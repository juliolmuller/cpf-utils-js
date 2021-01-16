# cpf-utils for JavaScript

![NPM Latest Version](https://img.shields.io/npm/v/cpf-utils)
![Downloads Count](https://img.shields.io/npm/dm/cpf-utils.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=cpf-utils)
![Last Update Date](https://img.shields.io/github/last-commit/juliolmuller/cpf-utils)
![Project License](https://img.shields.io/github/license/juliolmuller/cpf-utils)

Toolkit to handle the main operations with CPF data (Brazilian personal ID): validation, formatting and generation of valid character sequence.

## Installation

```bash
$ npm install cpf-utils --save
```

## Import

```js
// Common JS syntax:
const cpfUtils = require('cpf-utils').default

// ES Module syntax:
import cpfUtils from 'cpf-utils'
// or get the specific function with ES tree-shaking:
import { isValid, generate, format } from 'cpf-utils'
```

or import it through your HTML file, using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/cpf-utils@latest/dist/cpf-utils.min.js"></script>
```

## API

`cpf-utils` is only a wrapper to the libraries maintained by **LacusSoft**, [`cpf-fmt`](https://www.npmjs.com/package/@lacussoft/cpf-fmt), [`cpf-gen`](https://www.npmjs.com/package/@lacussoft/cpf-gen) and [`cpf-val`](https://www.npmjs.com/package/@lacussoft/cpf-val), so you can refer directly to their specific documentation. Anyway, the API is detailed hereby with examples.

### `cpfUtils.format(string[, options])`

**returns** `string`

The `format` method expects a string as its first parameter.

If the input does not contain 11 digits (it does not require to be a valid CPF, but it MUST be 11-digits long) an `onFail` callback is invoked. By default, a copy of the input is returned as a fallback, but this callback and other customizations may be defined in the second parameter.

```js
const cpf = '47844241055'

cpfFmt(cpf)       // returns '478.442.410-55'

cpfFmt(cpf, {     // returns '478.***.***-**'
  hidden: true
})

cpfFmt(cpf, {     // returns '478442410_55'
  delimiters: {
    dot: '',
    dash: '_'
  }
})
```

Here are the available default configurations that can be overwritten by the `options` parameter:

```js
cpfFmt(cpf, {
  delimiters: {
    dot: '.',       // string to replace the dot characters
    dash: '-',      // string to replace the dash character
  },
  escape: false,    // boolean to define if the result should be HTML escaped
  hidden: false,    // boolean to define if digits should be hidden
  hiddenKey: '*',   // string to replace hidden digits
  hiddenRange: {
    start: 3,       // starting index of the numeric sequence to be hidden (min 0)
    end: 10,        // ending index of the numeric sequence to be hidden (max 10)
  },
  onFail(value) {   // fallback function to be invoked in case a non-11-digits is passed
    return value
  }
})
```

### `cpfUtils.generate([options])`

**returns** `string`

If you need to generate valid CPF's to work with, the `generate` method make this task easy and safe. You just need to invoke it with no parameters to obtain an 11-digits string, however, you can provide an `options` object to configure its output, like flagging it to format or to complete a digits string with a valid CPF sequence:

```js
let cpf = cpfGen()      // returns '47844241055'

cpf = cpfGen({          // returns '005.265.352-88'
  format: true
})

cpf = cpfGen({          // returns '52825091138'
  prefix: '528250911'
})

cpf = cpfGen({          // returns '528.250.911-38'
  prefix: '528250911'
  format: true
})
```

The default configurations are:

```js
cpfGen({
  format: false, // indicates if output should be formatted
  prefix: '',    // if you have the CPF initials and want to complete it with valid digits.
})               //     The string provided must contain between 0 and 9 digits!
```

Keep in mind that, for the `prefix` option, it must be a **string** containing up to 9 digits.

### `cpfUtils.validate(string)`

**returns** `boolean`

The `validate` method receives a string as its single parameter, evaluate it and returns `true` or `false` as output. This parameter may contain any character like letters, symbols, punctuation or white spaces, but it will immediately return `false` in case the expected 11 digits are not found to be deeply evaluated.


```js
cpfVal('12345678909')     // returns "true", because "123.456.789-09" is a valid CPF

cpfVal('123.456.789-09')  // returns "true"

cpfVal('12345678910')     // returns "false", because the suffix has changed, making this CPF invalid
                 ^^
```
