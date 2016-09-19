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

class ListGroupItem extends EtchComponent {

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
      <li {...this.properties.attributes} className={classes}>
        {this.children.map(function(child) {
          return child.render();
        })}
      </li>
    );
  }

}

export default ListGroupItem;
