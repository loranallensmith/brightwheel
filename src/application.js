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


class Application extends BrightwheelComponent {

  render() {

    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <title></title>

          // Use photonkit for styling
          <link rel="stylesheet" href="node_modules/photonkit/dist/css/photon.css" media="screen" title="no title" charset="utf-8" />

        </head>
        <body>{this.children}</body>

      </html>
    );
  }

}

export default Application;
