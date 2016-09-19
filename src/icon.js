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
import BrightwheelComponent from './brightwheel-component';

class Icon extends BrightwheelComponent {

  constructor(properties, children) {

    // Construct a basic BrightwheelComponent from the parameters given
    super(properties, children)

    // Set a default icon if unspecified
    if(this.properties.icon === undefined) {
      this.properties.icon = 'help-circled';
    }

    // Reinitialize component
    etch.initialize(this);

  }

  render() {
    let classes = classNames(
      'icon',
      `icon-${this.properties.icon}`,
      this.properties.classNames
    );
    return (<span {...this.properties.attributes} className={classes}></span>);
  }

}

export default Icon;
