/**
 * breit-wheeler
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Icon from '../src/icon';

describe('Icon', () => {

  describe('constructor', () => {

    it('should set a default icon if none is specified', () => {
      const myIcon = new Icon({ icon: undefined }, []);
      expect(myIcon.properties.icon).to.equal('help-circled');
    });

  });

});
