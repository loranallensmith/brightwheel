/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import ListGroup from '../src/list-group';
import ListGroupItem from '../src/list-group-item';
import Image from '../src/image';

describe('ListGroup', () => {

  describe('render', () => {

    it('should create the right element', () => {
      let myListGroup = new ListGroup({}, []);
      expect(myListGroup.element.tagName).to.equal('UL');
    });

    it('should render the correct class', () => {
      let myListGroup = new ListGroup({}, []);
      expect(myListGroup.element.className).to.include('list-group');
    });

    it('should include extra classes', () => {
      let myListGroup = new ListGroup({ classNames:['extra-class', 'another-class'] }, []);
      expect(myListGroup.element.className).to.contain('extra-class another-class');
    });

    it('should render children', () => {
      let myImage = new Image({ src: 'test.jpg' }, []);
      let myItem = new ListGroupItem({}, [myImage]);
      let myListGroup = new ListGroup({}, [myItem]);
      expect(myListGroup.element.children[0].tagName).to.equal('LI');
    });

  });

});
