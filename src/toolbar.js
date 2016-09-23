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

class Toolbar extends BrightwheelComponent {

  render() {

    // Use the type (header or footer) to determine which tag to render
    let TagName = this.properties.type;

    let classes = classNames(
      'toolbar', {
        [`toolbar-${this.properties.type}`] : this.properties.type !== undefined
      },
      this.properties.classNames
    );

    let titleBar;
    if(this.properties.title !== undefined) {
      titleBar = <h1 className='title'>{this.properties.title}</h1>
    }

    let actions;

    if (this.children !== undefined && this.children.length > 0) {
      actions = (
        <div className="toolbar-actions">
          {this.children.map(function(child) {
            return child.render();
          })}
        </div>
      )
    }

    return (
      <TagName {...this.properties.attributes} className={classes}>
        {titleBar}
        {actions}
      </TagName>);
  }

}

export default Toolbar;
