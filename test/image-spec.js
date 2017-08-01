/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Image from '../src/image';

describe('Image', () => {

  describe('render', () => {

    it('should render the correct tag', () => {
      let myImage = new Image({}, []);
      expect(myImage.element.tagName).to.equal('IMG');
    });

    it('Should render the source', () => {
      let myImage = new Image({ src: 'images/test.jpg' }, []);
      expect(myImage.element.src).to.include('images/test.jpg');
     });

    it('Should conditionally render the width', () => {
     let myWideImage = new Image({ width: 32 }, []);
     expect(myWideImage.element.width).to.equal(32);
   });

    it('Should conditionally render the height', () => {
      let myTallImage = new Image({ height: 32 }, []);
      expect(myTallImage.element.height).to.equal(32);
    });

    it('Should conditionally pull in the correct direction', () => {
      let myPulledImage = new Image({ pull: 'right' }, []);
      expect(myPulledImage.element.className).to.contain('pull-right');
    });

    it('Should render as media object when specified', () => {
      let myMediaImage = new Image({ isMediaObject: true }, []);
      expect(myMediaImage.element.className).to.contain('media-object');
    });

  });

});
