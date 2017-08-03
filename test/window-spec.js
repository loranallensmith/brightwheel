/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Window from '../src/window';
import WindowContent from '../src/window-content';

describe('Window', () => {

  describe('render method', () => {

    it('should create the right element', () => {
      let myWindow = new Window({}, []);
      expect(myWindow.element.tagName).to.equal('DIV');
    });

    it('should render the correct class', () => {
      let myWindow = new Window({}, []);
      expect(myWindow.element.className).to.include('window');
    });

    it('should include extra classes', () => {
      let myWindow = new Window({ classNames:['extra-class', 'another-class'] }, []);
      expect(myWindow.element.className).to.contain('extra-class another-class');
    });

    it('should render children', () => {
      let myWindowContent = new WindowContent({}, [])
      let myWindow = new Window({}, [myWindowContent]);
      expect(myWindow.children[0].element.tagName).to.equal('DIV');
    });

  });

});
