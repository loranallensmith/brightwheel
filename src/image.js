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

class Image extends BrightwheelComponent {

  render() {
    let classes = classNames(
      {
        [`img-${this.properties.shape}`]: this.properties.shape !== undefined,
        'media-object': this.properties.isMediaObject === true,
        [`pull-${this.properties.pull}`]: this.properties.pull !== undefined
      },
      this.properties.classNames
    );

    return (<img {...this.properties.attributes} className={classes} src={this.properties.src} width={this.properties.width} height={this.properties.height}></img>);
  }

}

export default Image;
