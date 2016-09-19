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

class NavGroupItem extends BrightwheelComponent {

  render() {

    // Active NavGroupItems should render as anchor elements
    const TagName = this.properties.active === true ? `a` : `span`;

    let classes = classNames(
      this.properties.classNames,
      'nav-group-item', {
        'active': this.properties.active === true
      }
    );

    let navItemIcon;

    if(this.properties.icon) {
      navItemIcon = <Icon icon={this.properties.icon} />
    }
    else {
      navItemIcon = ""
    }

    return (
      <TagName {...this.properties.attributes} className={classes}>
        {navItemIcon}
        {this.properties.text}
      </TagName>
    );
  }

}

export default NavGroupItem;
