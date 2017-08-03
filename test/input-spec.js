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
      expect(myInput.element.tagName).to.equal('INPUT')
    });

    it('Should have the correct default classes', () => {
      let myInput = new Input({}, []);
      expect(myInput.element.className).to.include('form-control');
    });

    it('Should support multiple classes', () => {
      let myInput = new Input({ classNames: ['extra-class', 'another-class'] }, []);
      expect(myInput.element.className).to.include('another-class');
      expect(myInput.element.className).to.include('extra-class');
    });

    it('Should render the correct type', () => {
      let myInput = new Input({ type: 'text'}, []);
      expect(myInput.element.type).to.equal('text');
    });

    it('Should render the name', () => {
      let myInput = new Input({ name: 'my-input'}, []);
      expect(myInput.element.name).to.equal('my-input');
    });

  });

});
