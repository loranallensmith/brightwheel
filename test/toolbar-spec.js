/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Toolbar from '../src/toolbar';
import Button from '../src/button';

describe('Toolbar', () => {

  describe('render method', () => {

    it('should render headers', () => {
      let myToolbar = new Toolbar({ type: 'header' }, []);
      expect(myToolbar.virtualElement.tagName).to.equal('HEADER');
      expect(myToolbar.virtualElement.properties.className).to.include('toolbar-header');
    });

    it('should render footers', () => {
      let myToolbar = new Toolbar({ type: 'footer' }, []);
      expect(myToolbar.virtualElement.tagName).to.equal('FOOTER');
      expect(myToolbar.virtualElement.properties.className).to.include('toolbar-footer');
    });

    it('should render the correct class', () => {
      let myToolbar = new Toolbar({}, []);
      expect(myToolbar.virtualElement.properties.className).to.include('toolbar');
    });

    it('should include extra classes', () => {
      let myToolbar = new Toolbar({ classNames:['extra-class', 'another-class'] }, []);
      expect(myToolbar.virtualElement.properties.className).to.contain('extra-class another-class');
    });

    it('should render a div for Toolbar actions', () => {
      let myButton = new Button({ text: 'My Button' }, []);
      let myToolbar = new Toolbar({}, [myButton]);
      expect(myToolbar.virtualElement.children[0].tagName).to.equal('DIV');
      expect(myToolbar.virtualElement.children[0].properties.className).to.contain('toolbar-actions');
    });

    it('should conditionally render a title', () => {
      let myToolbar = new Toolbar({ title: 'My Toolbar' }, []);
      expect(myToolbar.virtualElement.children[0].tagName).to.equal('H1')
    });

  });

});
