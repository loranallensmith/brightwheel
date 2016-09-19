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
      const virtualNode = myLabel.virtualElement;
      expect(virtualNode.tagName).to.equal('LABEL');
      expect(virtualNode.children[0].text).to.equal('Specified Label');
    });

    it('should include extra classes', () => {
      const myLabel = new Label({ text: 'My Label', classNames:['extra-class', 'another-class']}, []);
      const virtualNode = myLabel.virtualElement;
      expect(virtualNode.properties.className).to.contain('extra-class another-class');
    });

  });

});
