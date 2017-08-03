/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  expect
} from 'chai';
import TabItem from '../src/tab-item';

describe('TabItem', () => {

  describe('render', () => {

    it('Should render the right elements in the right order', () => {
      let myItem = new TabItem({ text: 'My tab' },[]);
      let firstChild = myItem.element.childNodes[0];
      let secondChild = myItem.element.childNodes[1];
      expect(myItem.element.tagName).to.equal('DIV');
      expect(firstChild.tagName).to.equal('SPAN');
      expect(firstChild.className).to.contain('icon-close-tab');
      expect(secondChild.textContent).to.equal('My tab');
    });

    it('Should render the correct default classes', () => {
      let myItem = new TabItem({ text: 'My tab' },[]);
      let firstChild = myItem.element.children[0];
      expect(myItem.element.className).to.include('tab-item');
      expect(firstChild.className).to.include('icon icon-cancel icon-close-tab');
    });

    it('Should support active tabs', () => {
      let myItem = new TabItem({ text: 'My tab', icon: 'check', active: true },[]);
      expect(myItem.element.className).to.include('active');
    });

    it('Should support fixed tabs', () => {
      let myItem = new TabItem({ text: 'My tab', fixed: true },[]);
      let firstChild = myItem.element.children[0];
      expect(myItem.element.className).to.include('tab-item-fixed');
      expect(firstChild.className).to.include('icon icon-plus');
    });

    it('Should support tabs without text', () => {
      let myItem = new TabItem({ fixed: true },[]);
      let firstChild = myItem.element.children[0];
      expect(firstChild.tagName).to.equal('SPAN');
      expect(firstChild.className).to.include('icon');
      expect(myItem.element.children[1]).to.not.exist;
    });

    it('should include extra classes', () => {
      let myItem = new TabItem({ text: 'My Item', classNames: ['custom-class', 'another-class'] }, []);
      expect(myItem.element.className).to.contain('custom-class');
    });


  });

});
