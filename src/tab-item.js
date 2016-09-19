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
import Icon from './icon';

class TabItem extends EtchComponent {

  render() {

    let tabClasses = classNames(
      'tab-item', {
        'active' : this.properties.active === true,
        'tab-item-fixed': this.properties.fixed === true
      },
      this.properties.classNames
    );

    let spanClasses = classNames({
      'icon-close-tab' : this.properties.fixed !== true
    }
    );

    let iconType = this.properties.fixed ? 'plus' : 'cancel';

    return (
      <div {...this.properties.attributes} className={tabClasses}>
        <Icon icon={iconType} classNames={spanClasses} />
        {this.properties.text}
      </div>
    );
  }

}

export default TabItem;
