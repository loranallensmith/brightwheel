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

class NavGroup extends EtchComponent {

  render() {
    let classes = classNames(
      'nav-group',
      this.properties.classNames
    );

    let titleTag = "";

    if (this.properties.title !== undefined) {
      titleTag = <h5 class="nav-group-title">{this.properties.title}</h5>
    }

    return (
      <nav className={classes}>
        {titleTag}
        {this.children.map(function(child) {
          return child.render();
        })}
      </nav>);
  }

}

export default NavGroup;
