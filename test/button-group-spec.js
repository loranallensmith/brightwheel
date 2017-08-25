/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import ButtonGroup from '../src/button-group';
import Button from '../src/button';

describe('ButtonGroup', () => {

  describe('render method', () => {

    it('should create the right element', () => {
      let myButtonGroup = new ButtonGroup({}, []);
      expect(myButtonGroup.element.tagName).to.equal('DIV');
    });

    it('should render the correct class', () => {
      let myButtonGroup = new ButtonGroup({}, []);
      expect(myButtonGroup.element.className).to.include('btn-group');
    });

    it('should include extra classes', () => {
      let myButtonGroup = new ButtonGroup({ classNames:['extra-class', 'another-class'] }, []);
      expect(myButtonGroup.element.className).to.contain('extra-class another-class');
    });

    it('should render children', () => {
      let myButton = new Button({ text: 'My Button' }, [])
      let myButtonGroup = new ButtonGroup({}, [myButton]);
      expect(myButtonGroup.children[0].element.tagName).to.equal('BUTTON');
    });

  });

});
