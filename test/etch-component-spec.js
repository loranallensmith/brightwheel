/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import BrightwheelComponent from '../src/brightwheel-component';

describe('BrightwheelComponent', () => {

  describe('constructor', () => {

    it('should not be instantiable', () => {
      const fn = () => {
        let myComponent = new BrightwheelComponent({ type: 'abstract' }, []);
        return myComponent;
      };
      expect(fn).to.throw(TypeError);
    });

  });

});
