/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Label from '../src/label';

describe('Label', () => {

  describe('constructor', () => {

    it('should set default text if none is specified', () => {
      const myLabel = new Label({ text: undefined }, []);
      expect(myLabel.properties.text).to.equal('Label');
    });

    it('should create a label element with the correct text', () => {
      const myLabel = new Label({ text: 'Specified Label' }, []);
      expect(myLabel.element.tagName).to.equal('LABEL');
      expect(myLabel.element.textContent).to.equal('Specified Label');
    });

    it('should include extra classes', () => {
      const myLabel = new Label({ text: 'My Label', classNames:['extra-class', 'another-class']}, []);
      expect(myLabel.element.className).to.contain('extra-class another-class');
    });

  });

});
