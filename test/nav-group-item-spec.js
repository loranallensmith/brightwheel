/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import NavGroupItem from '../src/nav-group-item';

describe('NavGroupItem', () => {

  describe('render', () => {

    it('render as a span by default', () => {
      let myItem = new NavGroupItem({ text: 'My Item' }, []);
      expect(myItem.element.tagName).to.equal('SPAN');
    });

    it('render as an anchor when active', () => {
     let myItem = new NavGroupItem({ text: 'My Item', active: true }, []);
     expect(myItem.element.tagName).to.equal('A');
     });


    it('should render the correct text', () => {
      let myItem = new NavGroupItem({ text: 'My Item' }, []);
      expect(myItem.element.innerHTML).to.equal('My Item');
    });

    it('should include extra classes', () => {
      let myItem = new NavGroupItem({ text: 'My Item', classNames: ['custom-class', 'another-class'] }, []);
      expect(myItem.element.className).to.contain('custom-class');
    });

    it('should support icons with text', () => {
      let myItem = new NavGroupItem({ text: 'My Item', icon: 'check' }, []);
      let firstChild = myItem.element.children[0];
      let text = myItem.element.textContent;
      expect(firstChild.tagName).to.equal('SPAN');
      expect(firstChild.className).to.include('icon');
      expect(text).to.equal('My Item');
    });

    it('should support icons without text', () => {
      let myItem = new NavGroupItem({ icon: 'check' }, []);
      let firstChild = myItem.element.children[0];
      expect(firstChild.tagName).to.equal('SPAN');
      expect(firstChild.className).to.include('icon');
      expect(myItem.element.children[1]).to.not.exist;
    });

  });

});
