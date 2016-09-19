/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import RadioButton from '../src/radio-button';

describe('RadioButton', () => {

  describe('render', () => {

    it('Should render the correct elements', () => {
      let myRadio = new RadioButton({}, []);
      let firstChild = myRadio.virtualElement.children[0];
      expect(myRadio.virtualElement.tagName).to.equal('DIV');
      expect(firstChild.constructor.name).to.equal('ComponentWidget');
      expect(firstChild.children[0].tagName).to.equal('INPUT');
    });

    it('Should have the correct default classes', () => {
      let myRadio = new RadioButton({}, []);
      expect(myRadio.virtualElement.properties.className).to.include('radio');
    });

    it('Should support multiple classes', () => {
      let myRadio = new RadioButton({ classNames: ['extra-class', 'another-class'] }, []);
      expect(myRadio.virtualElement.properties.className).to.include('another-class');
      expect(myRadio.virtualElement.properties.className).to.include('extra-class');
    });

    it('Should render a name', () => {
      let myRadio = new RadioButton({ name: 'my-radio'}, []);
      let label = myRadio.virtualElement.children[0];
      expect(label.children[0].properties).to.contain.keys({ name: 'my-radio' });
    });

    it('Should render the label text', () => {
      let myRadio = new RadioButton({ text: 'Text content'}, []);
      expect(myRadio.virtualElement.children[0].component.properties).to.contain.keys({ text: 'Text content' });
    });

  });

});
