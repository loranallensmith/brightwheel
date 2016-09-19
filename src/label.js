/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /** @jsx etch.dom */

import etch from 'etch';
import classNames from 'classnames';
import EtchComponent from './etch-component';

class Label extends EtchComponent {

  constructor(properties, children) {

    // Construct a basic EtchComponent
    super(properties, children)

    // Set default label if unspecified
    if(this.properties.text === undefined) {
      this.properties.text = 'Label';
    }

    // Reinitialize component
    etch.initialize(this);

  }

  render() {
    let classes = classNames(
      this.properties.classNames
    );
    return (
      <label {...this.properties.attributes} className={classes}>
        {this.children}
        {this.properties.text}
      </label>);
  }

}

export default Label;
