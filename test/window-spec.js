/**
 * breit-wheeler
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Window from '../src/window';
import Toolbar from '../src/toolbar';

describe('Window', () => {

  describe('render method', () => {

    it('should create the right element', () => {
      let myWindow = new Window({}, []);
      expect(myWindow.virtualElement.tagName).to.equal('DIV');
    });

    it('should render the correct class', () => {
      let myWindow = new Window({}, []);
      expect(myWindow.virtualElement.properties.className).to.include('window');
    });

    it('should include extra classes', () => {
      let myWindow = new Window({ classNames:['extra-class', 'another-class'] }, []);
      expect(myWindow.virtualElement.properties.className).to.contain('extra-class another-class');
    });

    it('should render children', () => {
      let myToolbar = new Toolbar({}, [])
      let myWindow = new Window({}, [myToolbar]);
      expect(myWindow.children[0].constructor.name).to.equal('Toolbar');
    });

  });

});
