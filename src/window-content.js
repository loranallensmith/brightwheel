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

class WindowContent extends BrightwheelComponent {

  render() {
    let classes = classNames(
      'window-content',
      this.properties.classNames
    );

    return (
      <div {...this.properties.attributes} className={classes}>
        {this.children.map(function(child) {
          return child.render();
        })}
      </div>);
  }

}

export default WindowContent;
