# [brightwheel](https://github.com/loranallensmith/brightwheel)

[![NPM version](http://img.shields.io/npm/v/brightwheel.svg?style=flat-square)](https://www.npmjs.com/package/brightwheel)
[![NPM downloads](http://img.shields.io/npm/dm/brightwheel.svg?style=flat-square)](https://www.npmjs.com/package/brightwheel)
[![Build Status](http://img.shields.io/travis/loranallensmith/brightwheel/master.svg?style=flat-square)](https://travis-ci.org/loranallensmith/brightwheel)
[![Coverage Status](https://img.shields.io/coveralls/loranallensmith/brightwheel.svg?style=flat-square)](https://coveralls.io/loranallensmith/brightwheel)
[![Dependency Status](http://img.shields.io/david/loranallensmith/brightwheel.svg?style=flat-square)](https://david-dm.org/loranallensmith/brightwheel)

> Build beautiful Electron user interfaces with Photon and Etch

### About

Brightwheel is a JavaScript library that lets you use [Etch](https://github.com/atom/etch) and [Photon](http://photonkit.com/) to construct and manage the state of user interfaces for [Electron](https://electron.atom.io) applications.


### Getting Started

#### Installation

Add Brightwheel to your project's dependencies.
```sh
$ npm install --save brightwheel
```

#### Usage

Include Photon styles in your HTML file's `<head>`.
```html
<script src="path/to/photon.css" charset="utf-8"></script>
```

Import Brightwheel components into your project.
```javascript
// Import and namespace all components
import * as UI from 'brightwheel'

// Import individual components
import { Button } from 'brightwheel'

```

Generate components and add them to your document.
```javascript
let mySubmitButton = new Button({
  type: 'positive',
  size: 'mini',
  text: 'Submit'
  // specify other properties as needed
}, []);

let myCancelButton = new Button({
  type: 'default',
  size: 'mini',
  text: 'Cancel'
  // specify other properties as needed
}, []);


// Nest components within parent components
let myActions = new FormActions({
  // specify properties as needed
}, [
  mySubmitButton,
  myCancelButton
]);

// Nest the elements within the DOM
document.querySelector('#form-1').appendChild(myActions.element);

```

### How to Test

Run one, or a combination of the following commands to lint and test your code:

```sh
$ npm run lint          # Lint the source code with ESLint
$ npm test              # Run unit tests with Mocha
$ npm run test:watch    # Run unit tests with Mocha, and watch files for changes
$ npm run test:cover    # Run unit tests with code coverage by Istanbul
```


### License

MIT © 2016 Allen Smith &lt;loranallensmith@github.com&gt;
