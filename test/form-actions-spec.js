/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import FormActions from '../src/form-actions';
import Button from '../src/button';

describe('FormActions', () => {

  describe('render', () => {

    it('should create the right element', () => {
      let myActions = new FormActions({}, []);
      expect(myActions.virtualElement.tagName).to.equal('DIV');
    });

    it('should render the correct class', () => {
      let myActions = new FormActions({}, []);
      expect(myActions.virtualElement.properties.className).to.include('form-actions');
    });

    it('should include extra classes', () => {
      let myActions = new FormActions({ text: 'My FormActions', classNames:['extra-class', 'another-class']}, []);
      expect(myActions.virtualElement.properties.className).to.contain('extra-class another-class');
    });

    it('should render children elements', () => {
      let myButton = new Button({ text: 'Submit' }, [])
      let myActions = new FormActions({}, [myButton]);
      expect(myActions.children[0].constructor.name).to.equal('Button');
    });

  });

});
