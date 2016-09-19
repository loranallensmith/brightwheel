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
import Icon from './icon';


class Button extends EtchComponent {

  render() {

    let classes = classNames(
      'btn', {
        [`btn-${this.properties.type}`]: this.properties.type !== undefined,
        [`btn-${this.properties.size}`]: this.properties.size !== undefined
      },
      this.properties.classNames
    );

    // Only render an icon if specified
    if (this.properties.icon !== undefined) {
      this.children.push(<Icon icon={this.properties.icon} classNames='icon-text' />);
    }

    return (
      <button {...this.properties.attributes} className={classes}>
        {this.children}
        {this.properties.text}
      </button>
    );
  }

}

export default Button;
