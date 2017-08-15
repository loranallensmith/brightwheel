/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /** @jsx etch.dom */

import etch from 'etch'

class BrightwheelComponent {

  // Required: Define an ordinary constructor to initialize your component.
  constructor(properties, children) {

    if(new.target === BrightwheelComponent) {
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
  update (properties) {
   // perform custom update logic here...
   this.properties = properties;

   // then call `etch.update`, which is async and returns a promise
   return etch.update(this)
  }


 // Optional: Destroy the component. Async/await syntax is pretty but optional.
 async destroy () {

   // call etch.destroy to remove the element and destroy child components
   await etch.destroy(this)

   // then perform custom teardown logic here...
 }


  // Property Setter
  // Use this to update component state and re-render the component
  setProperty (properties) {
    // If the newly passed properties contain an attributes object
    if (properties.hasOwnProperty('attributes')) {
      // Check to see if the component has any attributes specified
      if (this.properties.attributes) {
        // Combine old attributes and new ones
        let newAttributes = Object.assign({}, this.properties.attributes, properties.attributes)
        properties.attributes = newAttributes
      }
    }
    // Combine existing properties and newly passed ones
    let newProperties = Object.assign({}, this.properties, properties)

    // Update component with new properties
    this.update(newProperties)
  }

  // Property Unsetter
  // Use this to unset a property and re-render the component
  unsetProperty (property) {
    // Check for the specified property in component properties
    if (this.properties[property]) {
      delete this.properties[property]
      // Check for the specified property in the component attributes
    } else if (this.properties.attributes[property]) {
      delete this.properties.attributes[property]
    }
    this.update(this.properties)
  }

  // EventHandler Methods
  onCopy (event) {

  }

  onCut (event) {

  }

  onPaste (event) {

  }

  onCompositionEnd (event) {

  }

  onCompositionStart (event) {

  }

  onCompositionUpdate (event) {

  }

  onKeyDown (event) {

  }

  onKeyPress (event) {

  }

  onKeyUp (event) {

  }

  onFocus (event) {

  }

  onBlur (event) {

  }

  onChange (event) {

  }

  onInput (event) {

  }

  onSubmit (event) {

  }

  onClick (event) {

  }

  onContextMenu (event) {

  }

  onDoubleClick (event) {

  }

  onDrag (event) {

  }

  onDragEnd (event) {

  }

  onDragEnter (event) {

  }

  onDragExit (event) {

  }

  onDragLeave (event) {

  }

  onDragOver (event) {

  }

  onDragStart (event) {

  }

  onDrop (event) {

  }

  onMouseDown (event) {

  }

  onMouseEnter (event) {

  }

  onMouseLeave (event) {

  }

  onMouseMove (event) {

  }

  onMouseOut (event) {

  }

  onMouseOver (event) {

  }

  onMouseUp (event) {

  }

  onSelect (event) {

  }

  onTouchCancel (event) {

  }

  onTouchEnd (event) {

  }

  onTouchMove (event) {

  }

  onTouchStart (event) {

  }

  onScroll (event) {

  }

  onWheel (event) {

  }

  onAbort (event) {

  }

  onCanPlay (event) {

  }

  onCanPlayThrough (event) {

  }

  onDurationChange (event) {

  }

  onEmptied (event) {

  }

  onEncrypted (event) {

  }

  onEnded (event) {

  }

  onError (event) {

  }

  onLoadedData (event) {

  }

  onLoadedMetadata (event) {

  }

  onLoadStart (event) {

  }

  onPause (event) {

  }

  onPlay (event) {

  }

  onPlaying (event) {

  }

  onProgress (event) {

  }

  onRateChange (event) {

  }

  onSeeked (event) {

  }

  onSeeking (event) {

  }

  onStalled (event) {

  }

  onSuspend (event) {

  }

  onTimeUpdate (event) {

  }

  onVolumeChange (event) {

  }

  onWaiting (event) {

  }

  onLoad (event) {

  }

  onError (event) {

  }

  onAnimationStart (event) {

  }

  onAnimationEnd (event) {

  }

  onAnimationIteration (event) {

  }

  onTransitionEnd (event) {

  }



}

export default BrightwheelComponent
