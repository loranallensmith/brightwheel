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

class MediaBody extends BrightwheelComponent {

  render() {
    let classes = classNames(
      'media-body',
      this.properties.classNames
    );

    // If this component has a title, make sure we render it
    if(this.properties.title !== undefined){
      this.children.push(<strong>{this.properties.title}</strong>);
    }

    // Add the body text to the component
    this.children.push(<p>{this.properties.text}</p>);


    return (
      <div {...this.properties.attributes} className={classes}>
        {this.children}
      </div>
    );
  }

}

export default MediaBody;
