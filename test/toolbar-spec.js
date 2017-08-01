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
      let myButton = new Button({ text: 'My Button', icon: 'check' }, []);
      let myToolbar = new Toolbar({ type: 'header' }, [myButton]);
      expect(myToolbar.element.tagName).to.equal('HEADER');
      expect(myToolbar.element.className).to.include('toolbar-header');
    });

    it('should render footers', () => {
      let myToolbar = new Toolbar({ type: 'footer' }, []);
      expect(myToolbar.element.tagName).to.equal('FOOTER');
      expect(myToolbar.element.className).to.include('toolbar-footer');
    });

    it('should render the correct class', () => {
      let myToolbar = new Toolbar({}, []);
      expect(myToolbar.element.className).to.include('toolbar');
    });

    it('should include extra classes', () => {
      let myToolbar = new Toolbar({ classNames:['extra-class', 'another-class'] }, []);
      expect(myToolbar.element.className).to.contain('extra-class another-class');
    });

    it('should render a div for Toolbar actions', () => {
      let myButton = new Button({ text: 'My Button' }, []);
      let myToolbar = new Toolbar({}, [myButton]);
      expect(myToolbar.element.children[0].tagName).to.equal('DIV');
      expect(myToolbar.element.children[0].className).to.contain('toolbar-actions');
    });

    it('should conditionally render a title', () => {
      let myToolbar = new Toolbar({ title: 'My Toolbar' }, []);
      expect(myToolbar.element.children[0].tagName).to.equal('H1')
    });

  });

});
