/**
 * breit-wheeler
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import EtchComponent from '../src/etch-component';

describe('EtchComponent', () => {

  describe('new EtchComponent()', () => {

    it('should not be instantiable', () => {
      const fn = () => {
        let myComponent = new EtchComponent({ type: 'abstract' }, []);
      };
      expect(fn).to.throw(TypeError);
    });

  });

});
