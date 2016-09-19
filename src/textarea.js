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
import EtchComponent from './etch-component';

class TextArea extends EtchComponent {

  render() {
    let classes = classNames(
      'form-control',
      this.properties.classNames
    );

    return (
      <textarea type={this.properties.type} name={this.properties.name} {...this.properties.attributes} className={classes} rows={this.properties.rows} cols={this.properties.cols} placeholder={this.properties.placeholder}>
        {this.properties.text}
      </textarea>
    );
  }

}

export default TextArea;
