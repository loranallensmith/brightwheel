/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Select from '../src/select';

describe('Select', () => {

  describe('render', () => {

    it('Should render the correct element', () => {
      let mySelect = new Select({}, []);
      expect(mySelect.element.tagName).to.equal('SELECT')
    });

    it('Should have the correct default classes', () => {
      let mySelect = new Select({}, []);
      expect(mySelect.element.className).to.include('form-control');
    });

    it('Should support multiple classes', () => {
      let mySelect = new Select({ classNames: ['extra-class', 'another-class'] }, []);
      expect(mySelect.element.className).to.include('another-class');
      expect(mySelect.element.className).to.include('extra-class');
    });

    it('Should render children as option tags', () => {
      let mySelect = new Select({}, ['Option 1', 'Option 2', 'Option 3']);
      expect(mySelect.element.children.length).to.equal(3);
      expect(mySelect.element.children[0].tagName).to.equal('OPTION')
      expect(mySelect.element.children[0].textContent).to.equal('Option 1')
    });

  });

});
