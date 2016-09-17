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

class PaneGroup extends EtchComponent {

  render() {
    let classes = classNames(
      'pane-group',
      this.properties.classNames
    );

    return (
      <div className={classes}>
        {this.children.map(function(child) {
          child
        })}
      </div>);
  }

}

export default PaneGroup;
