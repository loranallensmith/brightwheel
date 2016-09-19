/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import CheckBox from '../src/checkbox';

describe('CheckBox', () => {

  describe('render', () => {

    it('Should render the correct elements', () => {
      let myCheckbox = new CheckBox({}, []);
      let firstChild = myCheckbox.virtualElement.children[0];
      expect(myCheckbox.virtualElement.tagName).to.equal('DIV');
      expect(firstChild.constructor.name).to.equal('ComponentWidget');
      expect(firstChild.children[0].tagName).to.equal('INPUT');
    });

    it('Should have the correct default classes', () => {
      let myCheckbox = new CheckBox({}, []);
      expect(myCheckbox.virtualElement.properties.className).to.include('checkbox');
    });

    it('Should support multiple classes', () => {
      let myCheckbox = new CheckBox({ classNames: ['extra-class', 'another-class'] }, []);
      expect(myCheckbox.virtualElement.properties.className).to.include('another-class');
      expect(myCheckbox.virtualElement.properties.className).to.include('extra-class');
    });

    it('Should render a name', () => {
      let myCheckbox = new CheckBox({ name: 'my-radio'}, []);
      let label = myCheckbox.virtualElement.children[0];
      expect(label.children[0].properties).to.contain.keys({ name: 'my-radio' });
    });

    it('Should render the label text', () => {
      let myCheckbox = new CheckBox({ text: 'Text content'}, []);
      expect(myCheckbox.virtualElement.children[0].component.properties).to.contain.keys({ text: 'Text content' });
    });

  });

});
