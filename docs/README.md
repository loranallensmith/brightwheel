# Brightwheel

### Components

- [BrightwheelComponent](#brightwheelcomponentproperties-children)

##### Windows
- [Window](#windowproperties-children)
- [WindowContent](#windowcontentproperties-children)

##### Layout
- [Toolbar](#toolbarproperties-children)
- [PaneGroup](#panegroupproperties-children)
- [Pane](#paneproperties-children)
- [TabGroup](#tabgroupproperties-children)
- [TabItem](#tabitemproperties-children)

##### Navigation
- [NavGroup](#navgroupproperties-children)
- [NavGroupItem](#navgroupitemproperties-children)

##### Lists
- [ListGroupItem](#listgroupitemproperties-children)
- [ListGroup](#listgroupproperties-children)

##### Buttons
- [ButtonGroup](#buttongroupproperties-children)
- [Button](#buttonproperties-children)

##### Forms
- [FormActions](#formactionsproperties-children)
- [FormGroup](#formgroupproperties-children)
- [Input](#inputproperties-children)
- [Label](#labelproperties-children)
- [Checkbox](#checkboxproperties-children)
- [RadioButton](#radiobuttonproperties-children)
- [Select](#selectproperties-children)
- [Textarea](#textareaproperties-children)

##### Images and Graphics
- [Icon](#iconproperties-children)
- [Image](#imageproperties-children)
- [MediaBody](#mediabodyproperties-children)

##### Tables
- [Table](#tableproperties-data)

---

#### BrightwheelComponent({properties}, [children])

This is the superclass that all other components extend.  It implements a minimal scaffolding of methods that Etch can use to construct, render, update, and destroy the component.

You cannot directly instantiate this component. Instead, extend it and override its methods as needed.

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

#### Label({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `text` _String_

**Example**

```javascript
let myLabel = new Label({
  attributes: {
    id: 'label-1'
  },
  classNames: ['my-class'],
  text: 'Email Address'
}, []);
```

**Output**

```html
<label id="label-1" class="my-class">Email Address</label>
```

---

#### ListGroupItem({properties}, [children])
**Properties**
- `active` _Boolan_
- `attributes` _Object_
- `classNames` _Array_
- `header` _Boolean_

**Example**

```javascript
let myItem = new ListGroupItem({
  active: true
  attributes: {
    id: 'item-1'
  },
  classNames: ['my-class'],
  header: false
}, [child-component, child-component]...);
```

**Output**

```html
<li id="item-1" class="list-group-item active my-class">
  <child-component>
  <child-component>...
</li>
```

---

#### ListGroup({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript
let myGroup = new ListGroup({
  attributes: {
    id: 'group-1'
  },
  classNames: ['my-class'],
}, [ListGroupItem, ListGroupItem...]);
```

**Output**

```html
<ul id="group-1" class="list-group my-class">
  <ListGroupItem>
  <ListGroupItem>
</ul>
```

---

#### MediaBody({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `text` _String_
- `title` _String_

**Example**

```javascript
let myBody = new MediaBody({
  attributes: {
    id: 'body-1'
  },
  classNames: ['my-class'],
  text: 'This is the text.'
  title: 'This is a title'
}, []);
```

**Output**

```html
<div id="body-1" class="media-body my-class">
  <strong>This is a title</strong>
  <p>This is the text</p>
</div>
```

---

#### NavGroupItem({properties}, [children])
**Properties**
- `active` _Boolean_
- `attributes` _Object_
- `classNames` _Array_
- `icon` _String_

**Example**

```javascript
let myItem = new NavGroupItem({
  active: true
  attributes: {
    id: 'item-1'
  },
  classNames: ['my-class'],
  icon: 'check'
  text: 'This is an item'
}, []);
```

**Output**

```html
<a id="item-1" class="nav-group-item active">
  <span class="icon icon-check"></span>
  This is an item
</a>
```

---

#### NavGroup({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `title` _String_

**Example**

```javascript
let myGroup = new NavGroup({
  attributes: {
    id: 'group-1'
  },
  classNames: ['my-class'],
  title: 'My Nav Group'
}, [NavGroupItem, NavGroupItem...]);
```

**Output**

```html
<nav id="group-1" class="nav-group my-class">
  <h5 class="nav-group-title">My Nav Group</h5>
  <NavGroupItem>
  <NavGroupItem>...
</nav>
```

---

#### PaneGroup({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript
let myGroup = new PaneGroup({
  attributes: {
    id: 'group-1'
  },
  classNames: ['my-class'],
}, [Pane, Pane...]);
```

**Output**

```html
<div id="group-1" class="pane-group my-class">
  <Pane>
  <Pane>...
</div>
```

---

#### Pane({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `sidebar` _Boolean_
- `size` _String_

**Example**

```javascript
let myPane = new Pane({
  attributes: {
    id: 'pane-1'
  },
  classNames: ['my-class'],
  sidebar: true,
  size: 'one-third'
}, [child-component, child-component...]);
```

**Output**

```html
<div id="pane-1" class="pane pane-one-third sidebar my-class">
  <child-element>
  <child-element>...
</div>
```

---

#### RadioButton({properties}, [children])
**Properties**
- `attributes` _Object_
- `checked` _Boolean_
- `classNames` _Array_
- `text` _String_

**Example**

```javascript
let myRadio = new RadioButton({
  attributes: {
    id: 'radio-1'
  },
  classNames: ['my-class'],
  checked: true,
  text: 'Option 1'
}, []);
```

**Output**

```html
<div id="radio-1" class="radio my-class">
  <label>Option 1
    <input type="radio" checked>
  </label>
</div>
```

---

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

---

#### TabGroup({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript
let myGroup = new TabGroup({
  attributes: {
    id: 'group-1'
  },
  classNames: ['my-class'],
}, [TabItem, TabItem...]);
```

**Output**

```html
<div id="group-1" class="tab-group my-class">
  <TabItem>
  <TabItem>...
</div>
```

---

#### TabItem({properties}, [children])
**Properties**
- `active` _Boolean_
- `attributes` _Object_
- `classNames` _Array_
- `fixed` _Boolean_
- `text` _String_

**Example**

```javascript
let myTab = new TabItem({
  active: true,
  attributes: {
    id: 'tab-1'
  },
  classNames: ['my-class'],
  fixed: true
  text: 'New tab'
}, [child-component, child-component...]);
```

**Output**

```html
<div id="tab-1" class="tab-item active tab-item-fixed my-class">
  <span class="icon icon-plus"></span>
  New tab
</div>
```

---

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

---

#### Textarea({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `placeholder` _String_
- `text` _String_

**Example**

```javascript
let myTextarea = new Textarea({
  attributes: {
    id: 'area-1'
  },
  classNames: ['my-class'],
  placeholder: 'Enter your text here'
  text: 'This is my text'
}, []);
```

**Output**

```html
<textarea id="area-1" class="form-control my-class" placeholder="Enter your text here">
  This is my text
</textarea>
```

---

#### Toolbar({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_
- `title` _String_
- `type` _String_

**Example**

```javascript
let myBar = new Toolbar({
  attributes: {
    id: 'bar-1',
    classNames: ['my-class'],
    title: 'My Toolbar',
    type: 'header'
  }
}, [child-component, child-component]);
```

**Output**

```html
<header id="bar-1" class="toolbar toolbar-header my-class">
  <h1 class="title">My Toolbar</h1>
  <child-component>
  <child-component>..
</header>
```

---

#### WindowContent({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript
let myContent = new WindowContent({
  attributes: {
    id: 'content-1'
  },
  classNames: ['my-class']
}, [child-component, child-component...]);
```

**Output**

```html
<div id="content-1" class="window-content my-class">
  <child-component>
  <child-component>...
</div>
```

---

#### Window({properties}, [children])
**Properties**
- `attributes` _Object_
- `classNames` _Array_

**Example**

```javascript
let myWindow = new Window({
  attributes: {
    id: 'window-1'
  },
  classNames: ['my-class']
}, [child-component, child-component...]);
```

**Output**

```html
<div id="window-1" class="window my-class">
  <child-component>
  <child-component>...
</div>
```
