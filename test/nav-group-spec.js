/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import NavGroup from '../src/nav-group';
import NavGroupItem from '../src/nav-group-item';

describe('NavGroup', () => {

  describe('render', () => {

    it('should create the right element', () => {
      let myNavGroup = new NavGroup({}, []);
      expect(myNavGroup.element.tagName).to.equal('NAV');
    });

    it('should render the correct class', () => {
      let myNavGroup = new NavGroup({}, []);
      expect(myNavGroup.element.className).to.include('nav-group');
    });

    it('should include extra classes', () => {
      let myNavGroup = new NavGroup({ classNames:['extra-class', 'another-class'] }, []);
      expect(myNavGroup.element.className).to.contain('extra-class another-class');
    });

    it('should render a title if specified', () => {
      let myNavGroup = new NavGroup({ title: 'My Title'}, []);
      expect(myNavGroup.element.children[0].tagName).to.equal('H5');
      expect(myNavGroup.element.children[0].textContent).to.equal('My Title');
    });

    it('should not render a title unless specified', () => {
      let myItem = new NavGroupItem({}, [])
      let myNavGroup = new NavGroup({}, [myItem]);
      expect(myNavGroup.element.children[0].tagName).to.be.oneOf(['A', 'SPAN']);
    });

    it('should render children', () => {
      let myItem = new NavGroupItem({ text: 'My Item' }, []);
      let myNavGroup = new NavGroup({}, [myItem]);
      expect(myNavGroup.element.children[0].tagName).to.equal('SPAN');
      expect(myNavGroup.element.children[0].className).to.include('nav-group-item');
    });

  });

});
