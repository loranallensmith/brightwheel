/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import ListGroupItem from '../src/list-group-item';
import Image from '../src/image';
import MediaBody from '../src/media-body';

describe('ListGroupItem', () => {

  describe('render method', () => {

    it('should render the correct element', () => {
      let myItem = new ListGroupItem({}, []);
      expect(myItem.virtualElement.tagName).to.equal('LI');
    });

    it('should conditionally render as active', () => {
      let myItem = new ListGroupItem({ active: true }, []);
      expect(myItem.virtualElement.properties.className).to.contain('active');
    });

    it('should include extra classes', () => {
      let myItem = new ListGroupItem({ classNames: ['custom-class', 'another-class'] }, []);
      expect(myItem.virtualElement.properties.className).to.contain('custom-class');
    });

    it('should render children', () => {
      let myImage = new Image({ src: 'file.jpg', pull: 'left'}, []);
      let myBody = new MediaBody({ title: 'My body', text: 'My text'}, []);
      let myItem = new ListGroupItem({}, [myImage, myBody]);
      expect(myItem.children[0].virtualElement.tagName).to.equal('IMG');
      expect(myItem.children[1].virtualElement.tagName).to.equal('DIV');
    });

  });

});
