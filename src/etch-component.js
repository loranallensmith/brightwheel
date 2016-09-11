/**
 * breit-wheeler
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /** @jsx etch.dom */

import etch from 'etch'

class EtchComponent {

  // Required: Define an ordinary constructor to initialize your component.
  constructor(properties, children) {

    if(new.target === EtchComponent) {
      throw new TypeError('You cannot create an instance of this class.  Instead extend it.');
    }

    else {
      this.properties = properties;
      this.children = children;
      etch.initialize(this);
    }
  }


  // Required: The `render` method returns a virtual DOM tree representing the
  // current state of the component. Etch will call `render` to build and update
  // the component's associated DOM element. Babel is instructed to call the
  // `etch.dom` helper in compiled JSX expressions by the `@jsx` pragma above.
  render() {
    return <div></div>;
  }


  // Optional: Update the component with new properties and children
  update (properties, children) {

   // perform custom update logic here...

   // then call `etch.update`, which is async and returns a promise
   return etch.update(this)
  }


 // Optional: Destroy the component. Async/await syntax is pretty but optional.
 async destroy () {

   // call etch.destroy to remove the element and destroy child components
   await etch.destroy(this)

   // then perform custom teardown logic here...

 }

}

export default EtchComponent;
