# [brightwheel](https://github.com/loranallensmith/brightwheel)

[![NPM version](http://img.shields.io/npm/v/brightwheel.svg?style=flat-square)](https://www.npmjs.com/package/brightwheel)
[![NPM downloads](http://img.shields.io/npm/dm/brightwheel.svg?style=flat-square)](https://www.npmjs.com/package/brightwheel)
[![Build Status](http://img.shields.io/travis/loranallensmith/brightwheel/master.svg?style=flat-square)](https://travis-ci.org/loranallensmith/brightwheel)
[![Dependency Status](http://img.shields.io/david/loranallensmith/brightwheel.svg?style=flat-square)](https://david-dm.org/loranallensmith/brightwheel)

> Build beautiful Electron user interfaces with Photon and Etch

### About

Brightwheel is a JavaScript library that lets you use [Etch](https://github.com/atom/etch) and [Photon](http://photonkit.com/) to construct and manage the state of user interfaces for [Electron](https://electron.atom.io) applications.

![Electron app using Brightwheel](https://cloud.githubusercontent.com/assets/3477155/18810114/c9912f0a-825b-11e6-822f-39e4d238571e.png)



### Getting Started

#### Installation

Add Brightwheel and Photon to your project's dependencies.
```sh
$ npm install --save brightwheel photonkit
```

#### Usage

Include Photon styles in your HTML file's `<head>`.

```html
<link rel="stylesheet" href="node_modules/photonkit/dist/css/photon.css">
```
To use Brightwheel, simply import the library in any modules that use components from it.
```javascript
// Import and namespace all components
const UI = require('brightwheel')
```

## Creating Components

#### Expressive construction with JSX
Brightwheel works with JSX, which allows you to be more expressive about nested component construction and application layout.  Extending Brightwheel components allows you to create more complex applications and is the recommended way to use this library.

**To use JSX:**
1. Make sure your project includes all of the necessary presets and plugins for transpiling JSX.  There are several tutorials available online depending on your particular setup.
2. Create custom components that extend the `BrightwheelComponent` class and define their structure by overriding the `render()` method.
3. Implement custom behavior in your components via additional methods.


**Note:** _As of v0.2.0, Brightwheel supports Etch's `ref` functionality, which allows you to access nested components programmatically via their associated ref.  Event handling via Etch's `on` property will be available in a future release. More info about these Etch features is available [here](https://github.com/atom/etch/tree/3ff41a03b5bf5c4d576681ada3644913f3a2598c#references)._

```javascript
// The pragma below instructs etch to preprocess the JSX in this file
//
/** @jsx etch.dom */

// Require Brightwheel library and Etch for the preprocessing JSX
const UI = require('brightwheel')
const etch = require('etch')

// Import other custom components
const ToolBarTop = require('./components/toolbar-top')
const NavPane = require('./components/nav-pane')

// Define your own custom components by extending BrightwheelComponent.
// Override the render method to define the structure of your component.
// You can nest components within components and mix stock Brightwheel
// components with custom components.
// You can also create custom Etch components and use those as well.
class MainWindowLayout extends UI.BrightwheelComponent {
  render () {
    return (
      <UI.Window>                 // Stock component
        <ToolbarTop>              // Custom components
            <AddFileButton />     // ...
        </ToolbarTop>             // ...
        <UI.WindowContent>
          <UI.PaneGroup>
            <NavPane />
            <UI.Pane classNames='padded-more' />
          </UI.PaneGroup>
        </UI.WindowContent>
      </UI.Window>
    )
  }
}

// You can also extend individual components to add custom behavior
// for state management and event handling
class AddFileButton extends UI.Button {
  constructor (properties, children) {
    super(properties, children)
    this.properties.icon = 'plus'
    this.properties.size = 'large'
    this.update(this.properties, this.children)
  }

  loadFile(target) {
    // define custom component behavior
  }
}

// To a use component, add its element to the DOM
let mainWindowLayout = new MainWindowLayout()
let pagebody = document.querySelector('body')
pagebody.insertBefore(mainWindowLayout.element, pagebody.firstChild)

```

##### With JavaScript
Because Brightwheel components are just JavaScript objects, you can manage them programmatically like other objects.  While this approach will work for simple scenarios, it can make your code unwieldy in a more complex application.

```javascript
let mySubmitButton = new UI.Button({
  type: 'positive',
  size: 'mini',
  text: 'Submit'
  // specify other properties as needed
}, []);

let myCancelButton = new UI.Button({
  type: 'default',
  size: 'mini',
  text: 'Cancel'
  // specify other properties as needed
}, []);


// Nest components within parent components
let myActions = new UI.FormActions({
  // specify properties as needed
}, [
  mySubmitButton,
  myCancelButton
]);

// Nest the elements within the DOM
document.querySelector('#form-1').appendChild(myActions.element);

```

## Contributing

Pull Requests are welcome!

For an outline of the overall development priorities, have a look at the current [`ROADMAP.md`](https://github.com/loranallensmith/brightwheel/blob/master/ROADMAP.md) file.

Please follow the steps below to contribute to this project:
- Look for an open issue (or open one if it doesn't already exist)
- Fork this repository
- Be sure to write tests for the changes you're proposing
- Open a Pull Request and mention @loranallensmith
- To help with discoverability down the road, it helps to reference the original Issue your changes address in the body of your Pull Request


### How to Test

Run one, or a combination of the following commands to lint and test your code:

```sh
$ npm test              # Run unit tests with Mocha
```


### License

MIT © 2016 Allen Smith &lt;loranallensmith@github.com&gt;
