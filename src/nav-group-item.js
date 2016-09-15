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
import Icon from './icon';

class NavGroupItem extends EtchComponent {

  render() {

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
      <TagName className={classes}>
        {navItemIcon}
        {this.properties.text}
      </TagName>
    );
  }

}

export default NavGroupItem;
