/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import MediaBody from '../src/media-body';

describe('MediaBody', () => {

  describe('render', () => {

    it('should render a title if given', () => {
      const myBody = new MediaBody({ title: 'My title', text: 'My body text' }, []);
      expect(myBody.element.children[0].tagName).to.equal('STRONG');
      expect(myBody.element.children[0].textContent).to.equal('My title');
    });

    it('should not render a title unless given', () => {
      const myBody = new MediaBody({ text: 'My body text'}, []);
      expect(myBody.element.children[0].tagName).to.equal('P')
      expect(myBody.element.children[0].textContent).to.equal('My body text');
    });

  });

});
