/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Application from '../src/application';

describe('Application', () => {

  describe('render method', () => {

    it('should create the right element', () => {
      let myApp = new Application({}, []);
      expect(myApp.element.tagName).to.equal('HTML');
    });

    it('should include a head tag', () => {
      let myApp = new Application({}, []);
      expect(myApp.element.children[0].tagName).to.equal('HEAD');
     });

     it('should use photonkit for styling', () => {
      let myApp = new Application({}, []);
      expect(myApp.element.children[0].children[2].tagName).to.equal('LINK');
      expect(myApp.element.children[0].children[2].attributes.href.value).to.equal('node_modules/photonkit/dist/css/photon.css');
      });

  });

});
