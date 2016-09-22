# Brightwheel

### About

Brightwheel is a JavaScript library that lets you use [Etch](https://github.com/atom/etch) and [Photon](http://photonkit.com/) to construct and manage the state of user interfaces for [Electron](https://electron.atom.io) applications.

### Getting Started

#### Installation

Add Brightwheel to your project's dependencies.
```shell
> npm install --save brightwheel
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

### Components

#### BrightwheelComponent({properties}, [children])

This is the superclass that all other components extend.  It implements a minimal scaffolding of methods that Etch can use to construct, render, update, and destroy the component.

You cannot directly instantiate this component. Instead, extend it and override its methods as needed.


#### ButtonGroup({properties}, [children])

**Properties** _Object_
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript
let myButtonGroup = new ButtonGroup(
  {
    classNames: ['pull-left'],
    attributes: {
      id: "group-1"
    }
  },
  [Button, Button...]
);
```

**Output**

```html
<div id="group-1" class="btn-group pull-left">
  <Button>
  <Button>...
</div>
```


#### Button({properties}, [children])

**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `icon` _String_
- `size` _String_
- `text` _String_
- `type` _String_

**Example**

```javascript
let myButton = new Button({
  attributes: {
    id: 'button-1'
  },
  classNames: [
    'active'
  ],
  icon: 'check'
  size: 'mini',
  text: 'My Button'
  type: 'primary'
}, []);
```

**Output**

```html
<button id="button-1" class="btn btn-primary btn-mini active">
  <span class="icon icon-check"></span>
  My Button
</button>
```


#### Checkbox({properties}, [children])

**Properties**
- `attributes` _Object_
- `checked` _Boolean_
- `classNames` _Array_
- `text` _String_

**Example**

```javascript
let myCheckbox = new Checkbox({
  attributes: {
    id: 'checkbox-1'
  },
  classNames: ['my-class'],
  checked: true,
  text: 'Remember me'
}, []);

```

**Output**

```html
<div id="checkbox-1" class="checkbox my-class">
  <label>
    <input type="checkbox" checked>
    Remember me
  </label>
</div>
```


#### FormActions({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript
let myActions = new FormActions({
  attributes: {
    id: 'actions-1'
  },
  classNames: ['pull-left']
}, [child-components]);
```

**Output**

```html
<div id="actions-1" class="form-actions pull-left">
  <child-component>
  <child-component>...
</div>
```


#### FormGroup({properties}, [children])
**Properties**
- `attributes` _Objects_
- `classNames` _Array_

**Example**

```javascript
let myGroup = new FormGroup({
  attributes: {
    id: 'group-1'
  },
  classNames: ['pull-left']
}, [child-components]);
```

**Output**

```html
<div id="group-1" class="form-group pull-left">
  <child-component>
  <child-component>...
</div>
```


#### Icon({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `icon` _String_

**Example**

```javascript
let myIcon = new Icon({
  attributes: {
    id: 'icon-1'
  },
  classNames: ['my-class']
  icon: 'print'
}, []);
```

**Output**

```html
<span id="icon-1" class="icon icon-print my-class"></span>
```


#### Image({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `isMediaObject` _Boolean_
- `pull` _String_
- `shape` _String_
- `src` _String_

**Example**

```javascript
let myImage = new Image({
  attributes: {
    id: 'image-1'
  },
  classNames: ['my-class'],
  isMediaObject: true,
  pull: 'left',
  shape: 'rounded',
  src: 'images/logo.png'
}, []);
```

**Output**

```html
<img id="image-1" class="img-rounded media-object pull-left" src="images/logo.png">
```


#### Input({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `placeholder` _String_
- `type` _String_

**Example**

```javascript
let myInput = new Input({
  attributes: {
    id: 'input-1'
  },
  classNames: ['my-class'],
  placeholder: 'Enter text here',
  type: 'text'
}, []);
```

**Output**

```html
<input type="text" id="input-1" class="form-control my-class" placeholder="Enter text here">
```


#### Label({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `text` _String_

**Example**

```javascript

```

**Output**

```html

```


#### ListGroupItem({properties}, [children])
**Properties**
- `active` _Boolan_
- `attributes` _Object_
- `classNames` _Array_
- `header` _Boolean_

**Example**

```javascript

```

**Output**

```html

```


#### ListGroup({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript

```

**Output**

```html

```


#### MediaBody({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `text` _String_
- `title` _String_

**Example**

```javascript

```

**Output**

```html

```


#### NavGroupItem({properties}, [children])
**Properties**
- `active` _Boolean_
- `attributes` _Object_
- `classNames` _Array_
- `icon` _String_

**Example**

```javascript

```

**Output**

```html

```


#### NavGroup({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `title` _String_

**Example**

```javascript

```

**Output**

```html

```


#### PaneGroup({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript

```

**Output**

```html

```


#### Pane({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `sidebar` _Boolean_
- `size` _String_

**Example**

```javascript

```

**Output**

```html

```


#### RadioButton({properties}, [children])
**Properties**
- `attributes` _Object_
- `checked` _Boolean_
- `classNames` _Array_
- `text` _String_

**Example**

```javascript

```

**Output**

```html

```


#### Select({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript
let mySelect = new Select({
  attributes:  {
    id: 'select-1'
  },
  classNames: ['my-class']
}, [
  'item-1',
  'item-2',
  'item-3',
]);
```

**Output**

```html
<select id="select-1" class="form-control my-class">
  <option>item-1</option>
  <option>item-2</option>
  <option>item-3</option>
</select>
```


#### TabGroup({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript

```

**Output**

```html

```


#### TabItem({properties}, [children])
**Properties**
- `active` _Boolean_
- `attributes` _Object_
- `classNames` _Array_
- `fixed` _Boolean_
- `text` _String_

**Example**

```javascript

```

**Output**

```html

```


#### Table({properties}, [data])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `striped` _Boolean_

**Example**

```javascript
let myTable = new Table({
  attributes: {
    id: 'table-1'
  },
  classNames: ['my-class'],
  striped: true
}, [
  {id: 1, name: 'Example User 1', email: 'user-1@example.com'},
  {id: 2, name: 'Example User 2', email: 'user-2@example.com'}
]);
```

**Output**

```html
<table id="table-1" class="table-striped my-class">
  <thead>
    <tr>
      <th>
        id
      </th>
      <th>
        name
      </th>
      <th>
        email
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        1
      </td>
      <td>
        Example User 1
      </td>
      <td>
        user-1@example.com
      </td>
    </tr>
    <tr>
      <td>
        2
      </td>
      <td>
        Example User 2
      </td>
      <td>
        user-2@example.com
      </td>
    </tr>
  </tbody>
</table>
```


#### Textarea({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `placeholder` _String_
- `text` _String_

**Example**

```javascript

```

**Output**

```html

```


#### Toolbar({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `title` _String_
- `type` _String_

**Example**

```javascript

```

**Output**

```html

```


#### WindowContent({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript

```

**Output**

```html

```


#### Window({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript

```

**Output**

```html

```
