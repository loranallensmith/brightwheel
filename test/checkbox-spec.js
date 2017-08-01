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
      let firstChild = myCheckbox.element.children[0];
      expect(myCheckbox.element.tagName).to.equal('DIV');
      expect(firstChild.tagName).to.equal('LABEL');
      expect(firstChild.children[0].tagName).to.equal('INPUT');
    });

    it('Should have the correct default classes', () => {
      let myCheckbox = new CheckBox({}, []);
      expect(myCheckbox.element.className).to.include('checkbox');
    });

    it('Should support multiple classes', () => {
      let myCheckbox = new CheckBox({ classNames: ['extra-class', 'another-class'] }, []);
      expect(myCheckbox.element.className).to.include('another-class');
      expect(myCheckbox.element.className).to.include('extra-class');
    });

    it('Should render a name', () => {
      let myCheckbox = new CheckBox({ name: 'my-radio'}, []);
      let label = myCheckbox.element.children[0];
      expect(label.children[0].name).to.equal('my-radio');
    });

    it('Should render the label text', () => {
      let myCheckbox = new CheckBox({ text: 'Text content'}, []);
      expect(myCheckbox.element.children[0].textContent).to.equal('Text content');
    });

  });

});
