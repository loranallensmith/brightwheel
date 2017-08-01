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
import Icon from './icon';


class Button extends BrightwheelComponent {

  render() {

    let classes = classNames(
      'btn',
      this.properties.type !== undefined ? [`btn-${this.properties.type}`] : 'btn-default',
      {
        [`btn-${this.properties.size}`]: this.properties.size !== undefined
      },
      this.properties.classNames
    );

    // Only render an icon if specified
    let icon;

    let iconClasses = classNames(
      {'icon-text' : this.properties.text !== undefined}
    )

    if (this.properties.icon !== undefined) {
      icon = <Icon icon={this.properties.icon} classNames={iconClasses} />
    }
    else {
      icon = null
    }

    return (
      <button {...this.properties.attributes} className={classes}>
        {icon || null}
        {this.properties.text || null}
      </button>
    );
  }

}

export default Button;
