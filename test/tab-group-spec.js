/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import TabGroup from '../src/tab-group';
import TabItem from '../src/tab-item';

describe('TabGroup', () => {

  describe('render', () => {

    it('should create the right element', () => {
      let myGroup = new TabGroup({}, []);
      expect(myGroup.virtualElement.tagName).to.equal('DIV');
    });

    it('should render the correct class', () => {
      let myGroup = new TabGroup({}, []);
      expect(myGroup.virtualElement.properties.className).to.include('tab-group');
    });

    it('should include extra classes', () => {
      let myGroup = new TabGroup({ text: 'My TabGroup', classNames:['extra-class', 'another-class']}, []);
      expect(myGroup.virtualElement.properties.className).to.contain('extra-class another-class');
    });

    it('should render children elements', () => {
      let myTab = new TabItem({ text: 'Test Tab', active: true }, [])
      let myGroup = new TabGroup({}, [myTab]);
      expect(myGroup.children[0].constructor.name).to.equal('TabItem');
    });

  });

});
