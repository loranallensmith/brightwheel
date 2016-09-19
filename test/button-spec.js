/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Button from '../src/button';

describe('Button', () => {

  describe('render', () => {

    it('should render the correct element', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini'}, []);
      expect(myButton.virtualElement.tagName).to.equal('BUTTON');
    });

    it('should render the correct text', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini'}, []);
      expect(myButton.virtualElement.children[0]).to.contain.keys({ text: 'My Button'});
    });

    it('should include extra classes', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini', classNames: ['custom-class', 'another-class']}, []);
      expect(myButton.virtualElement.properties.className).to.contain('custom-class');
    });

    it('should render different sizes', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini'}, []);
      expect(myButton.virtualElement.properties.className).to.contain('btn-mini');
    });

    it('should render different types', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini'}, []);
      expect(myButton.virtualElement.properties.className).to.contain('btn-primary');
    });

    it('should support icons with text', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini', icon: 'check'}, []);
      let firstChild = myButton.virtualElement.children[0];
      let secondChild =
        myButton.virtualElement.children[1];
      expect(firstChild.constructor.name).to.equal('ComponentWidget');
      expect(firstChild.component.constructor.name).to.equal('Icon');
      expect(secondChild.constructor.name).to.equal('VirtualText');
    });

    it('should support icons without text', () => {
      let myButton = new Button({ type: 'primary', size: 'mini', icon: 'check'}, []);
      let firstChild = myButton.virtualElement.children[0];
      expect(firstChild.constructor.name).to.equal('ComponentWidget');
      expect(firstChild.component.constructor.name).to.equal('Icon');
      expect(myButton.virtualElement.children[1]).to.not.exist;
    });

    it('should render form buttons correctly', () => {
      let myButton = new Button({ type: 'primary', size: 'mini', icon: 'check', text: 'Submit', classNames: ['btn-form']}, []);
      expect(myButton.virtualElement.properties.className).to.contain('btn-form');
    });

  });

});
