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

class Toolbar extends EtchComponent {

  render() {

    let TagName = this.properties.type;

    let classes = classNames(
      'toolbar', {
        [`toolbar-${this.properties.type}`] : this.properties.type !== undefined
      },
      this.properties.classNames
    );

    let titleBar = "";
    if(this.properties.title !== undefined) {
      titleBar = <h1 className='title'>this.properties.title</h1>
    }

    return (
      <TagName className={classes}>
        {titleBar}
        {this.children.map(function(child) {
          child
        })}
      </TagName>);
  }

}

export default Toolbar;
