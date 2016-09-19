/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Input from '../src/input';

describe('Input', () => {

  describe('render', () => {

    it('Should render the correct element', () => {
      let myInput = new Input({}, []);
      expect(myInput.virtualElement.tagName).to.equal('INPUT')
    });

    it('Should have the correct default classes', () => {
      let myInput = new Input({}, []);
      expect(myInput.virtualElement.properties.className).to.include('form-control');
    });

    it('Should support multiple classes', () => {
      let myInput = new Input({ classNames: ['extra-class', 'another-class'] }, []);
      expect(myInput.virtualElement.properties.className).to.include('another-class');
      expect(myInput.virtualElement.properties.className).to.include('extra-class');
    });

    it('Should render the correct type', () => {
      let myInput = new Input({ type: 'text'}, []);
      expect(myInput.virtualElement.properties).to.contain.keys({ type: 'text' });
    });

    it('Should render the name', () => {
      let myInput = new Input({ name: 'my-input'}, []);
      expect(myInput.virtualElement.properties).to.contain.keys({ name: 'my-input' });
    });

  });

});
