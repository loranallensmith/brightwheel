/**
 * brightwheel
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

    it('should render the correct element', () => {
      let myText = new TextArea({text: "myText"}, []);
      expect(myText.element.tagName).to.equal('TEXTAREA')
    });

    it('Should have the correct default classes', () => {
      let myText = new TextArea({}, []);
      expect(myText.element.className).to.include('form-control');
    });

    it('Should support multiple classes', () => {
      let myText = new TextArea({ classNames: ['extra-class', 'another-class'] }, []);
      expect(myText.element.className).to.include('another-class');
      expect(myText.element.className).to.include('extra-class');
    });

    it('Should render the name', () => {
      let myText = new TextArea({ attributes: { name: 'my-input' }}, []);
      expect(myText.element.name).to.equal('my-input');
    });

    it('Should render the text', () => {
      let myText = new TextArea({ text: 'Text content'}, []);
      expect(myText.element.value).to.equal('Text content');
    });

  });

});
