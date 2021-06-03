# LacusSoft :: cpf-val

![NPM Latest Version](https://img.shields.io/npm/v/@lacussoft/cpf-val)
![Downloads Count](https://img.shields.io/npm/dm/@lacussoft/cpf-val.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=@lacussoft/cpf-val)
![Test Status](https://img.shields.io/travis/juliolmuller/cpf-utils-js/main.svg)
![Last Update Date](https://img.shields.io/github/last-commit/juliolmuller/cpf-utils-js)
![Project License](https://img.shields.io/github/license/juliolmuller/cpf-utils-js)

Basic function to validate CPF (Brazilian ID document).

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Installation

```bash
$ npm install @lacussoft/cpf-val
```

## Import

```js
// ES Modules
import cpfVal from '@lacussoft/cpf-val'

// Common JS
const cpfVal = require('@lacussoft/cpf-val')
```

or import it through your HTML file, using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@lacussoft/cpf-val@latest/dist/cpf-val.min.js"></script>
```

### Usage:

```js
cpfVal('12345678909')     // returns 'true'

cpfVal('123.456.789-09')  // returns 'true'

cpfVal('12345678910')     // returns 'false'
                 ^^
```
