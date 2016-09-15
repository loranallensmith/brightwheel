/**
 * breit-wheeler
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import TextArea from '../src/textarea';

describe('TextArea', () => {

  describe('render', () => {

    it('Should render the correct element', () => {
      let myText = new TextArea({}, []);
      expect(myText.virtualElement.tagName).to.equal('TEXTAREA')
    });

    it('Should have the correct default classes', () => {
      let myText = new TextArea({}, []);
      expect(myText.virtualElement.properties.className).to.include('form-control');
    });

    it('Should support multiple classes', () => {
      let myText = new TextArea({ classNames: ['extra-class', 'another-class'] }, []);
      expect(myText.virtualElement.properties.className).to.include('another-class');
      expect(myText.virtualElement.properties.className).to.include('extra-class');
    });

    it('Should render the correct rows and cols', () => {
      let myText = new TextArea({ type: 'text', rows: 10, cols: 20}, []);
      expect(myText.virtualElement.properties).to.contain.keys({ type: 'text', rows: 10, cols: 20 });
    });

    it('Should render the name', () => {
      let myText = new TextArea({ name: 'my-input'}, []);
      expect(myText.virtualElement.properties).to.contain.keys({ name: 'my-input' });
    });

    it('Should render the text', () => {
      let myText = new TextArea({ text: 'Text content'}, []);
      expect(myText.virtualElement.children[0].text).to.equal('Text content');
    });

  });

});
