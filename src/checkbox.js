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
import Label from './label';

class Checkbox extends EtchComponent {

  render() {
    let classes = classNames(
      'checkbox',
      this.properties.classNames
    );

    return (
      <div className={classes}>
        <Label text={this.properties.text}>
          <input type="checkbox" name={this.properties.name} checked={this.properties.checked}></input>
        </Label>
      </div>
    );
  }

}

export default Checkbox;
