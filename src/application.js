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

  constructor(properties, children) {

    // Construct a basic BrightwheelComponent from the parameters given
    super(properties, children)

    this.properties.stylesheetPaths = {
      // TODO: Implement null stylesheets for other platforms
      // aix: null,
      darwin: 'node_modules/photonkit/dist/css/photon.css'
      // freebsd: null,
      // linux: null,
      // openbsd: null,
      // sunos: null,
      // win32: null
    }

    // Set the active stylesheet based on the current process.platform value.
    this.setActiveStyleSheet(process.platform)

    // Initialize this component with etch.
    etch.initialize(this)

  }

  setActiveStyleSheet(name, path = undefined) {
    // If this style name has a built-in stylesheet associated it
    if (this.properties.stylesheetPaths.hasOwnProperty(name)) {
      this.properties.activeStylesheetPath = this.properties.stylesheetPaths[name]
    }
    // Allow for custom stylesheets
    else if (name === 'custom' && typeof path !== 'undefined') {
      this.properties.activeStylesheetPath = path
    }
    else {
      throw Error('The the specified style is not supported.')
    }
  }

  render() {

    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <title></title>

          <link rel="stylesheet" href={this.properties.activeStylesheetPath} media="screen" title="no title" charset="utf-8" />

        </head>
        <body>{this.children}</body>

      </html>
    );
  }

}

export default Application;
