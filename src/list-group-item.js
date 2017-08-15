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
import Icon from './icon';

class ListGroupItem extends BrightwheelComponent {

  render() {

    let itemType = this.properties.header === true ? 'header' : 'item';

    let classes = classNames(
      [`list-group-${itemType}`],
      {
        'active': this.properties.active === true
      },
      this.properties.classNames,
    );

    return (
      <li {...this.properties.attributes} className={classes} on={{click: this.onClick}}>
        {this.children}
      </li>
    );
  }

}

export default ListGroupItem;
