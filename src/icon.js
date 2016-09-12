/**
 * breit-wheeler
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

class Icon extends EtchComponent {

  constructor(properties, children) {

    // Construct a basic EtchComponent
    super(properties, children)

    // Set default icon if unspecified
    if(this.properties.icon === undefined) {
      this.properties.icon = 'help-circled';
    }

    // Reinitialize component
    etch.initialize(this);

  }

  render() {
    var classes = classNames(
      'icon',
      `icon-${this.properties.icon}`,
      this.properties.classNames
    );
    return (<span className={classes}></span>);
  }

}

export default Icon;
