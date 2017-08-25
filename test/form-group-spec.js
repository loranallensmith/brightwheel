/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import FormGroup from '../src/form-group';
import Label from '../src/label';

describe('FormGroup', () => {

  describe('render method', () => {

    it('should create the right element', () => {
      let myFormGroup = new FormGroup({}, []);
      expect(myFormGroup.element.tagName).to.equal('DIV');
    });

    it('should render the correct class', () => {
      let myFormGroup = new FormGroup({}, []);
      expect(myFormGroup.element.className).to.include('form-group');
    });

    it('should include extra classes', () => {
      let myFormGroup = new FormGroup({ classNames:['extra-class', 'another-class'] }, []);
      expect(myFormGroup.element.className).to.contain('extra-class another-class');
    });

    it('should render children', () => {
      let myLabel = new Label({ text: 'My Label' }, [])
      let myFormGroup = new FormGroup({}, [myLabel]);
      expect(myFormGroup.children[0].element.tagName).to.equal('LABEL');
    });

  });

});
