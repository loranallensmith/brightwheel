/**
 * breit-wheeler
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
      let myItem = new TabItem({ text: 'My tab', icon: 'check' },[]);
      let firstChild = myItem.virtualElement.children[0];
      let secondChild = myItem.virtualElement.children[1];
      expect(myItem.virtualElement.tagName).to.equal('DIV');
      expect(firstChild.constructor.name).to.equal('ComponentWidget');
      expect(firstChild.component.constructor.name).to.equal('Icon');
      expect(secondChild.constructor.name).to.equal('VirtualText');
    });

    it('Should render the correct default classes', () => {
      let myItem = new TabItem({ text: 'My tab' },[]);
      let firstChild = myItem.virtualElement.children[0];
      expect(myItem.virtualElement.properties.className).to.include('tab-item');
      expect(firstChild.component.virtualElement.properties.className).to.include('icon icon-cancel icon-close-tab');
    });

    it('Should support active tabs', () => {
      let myItem = new TabItem({ text: 'My tab', icon: 'check', active: true },[]);
      expect(myItem.virtualElement.properties.className).to.include('active');
    });

    it('Should support fixed tabs', () => {
      let myItem = new TabItem({ text: 'My tab', fixed: true },[]);
      let firstChild = myItem.virtualElement.children[0];
      expect(myItem.virtualElement.properties.className).to.include('tab-item-fixed');
      expect(firstChild.component.virtualElement.properties.className).to.include('icon icon-plus');
    });

    it('Should support tabs without text', () => {
      let myItem = new TabItem({ icon: 'check', fixed: true },[]);
      let firstChild = myItem.virtualElement.children[0];
      expect(firstChild.constructor.name).to.equal('ComponentWidget');
      expect(firstChild.component.constructor.name).to.equal('Icon');
      expect(myItem.virtualElement.children[1]).to.not.exist;
    });

    it('should include extra classes', () => {
      let myItem = new TabItem({ text: 'My Item', classNames: ['custom-class', 'another-class'] }, []);
      expect(myItem.virtualElement.properties.className).to.contain('custom-class');
    });


  });

});
