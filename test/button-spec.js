/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &ltloranallensmith@github.com&gt. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai'
import Button from '../src/button'

describe('Button', () => {

  describe('render', () => {

    it('should render the correct element', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini'}, [])
      expect(myButton.element.tagName).to.equal('BUTTON')
    })

    it('should render the correct default classes', () => {
      let myButton = new Button({ text: 'My Button'}, [])
      expect(myButton.element.className).to.equal('btn btn-default')
     })

    it('should render the correct text', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini'}, [])
      expect(myButton.element.textContent).to.equal('My Button')
    })

    it('should include extra classes', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini', classNames: ['custom-class', 'another-class']}, [])
      expect(myButton.element.className).to.contain('custom-class')
    })

    it('should render different sizes', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini'}, [])
      expect(myButton.element.className).to.contain('btn-mini')
    })

    it('should render different types', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini'}, [])
      expect(myButton.element.className).to.contain('btn-primary')
    })

    it('should support icons with text', () => {
      let myButton = new Button({ text: 'My Button', type: 'primary', size: 'mini', icon: 'check'}, [])
      let firstChild = myButton.element.children[0]
      let secondChild =
        myButton.element.children[1]
      expect(firstChild.tagName).to.equal('SPAN')
      expect(firstChild.className).to.include('icon')
      expect(myButton.element.textContent).to.equal('My Button')
    })

    it('should support icons without text', () => {
      let myButton = new Button({ type: 'primary', size: 'mini', icon: 'check'}, [])
      let firstChild = myButton.element.children[0]
      expect(firstChild.tagName).to.equal('SPAN')
      expect(firstChild.className).to.include('icon')
      expect(myButton.element.textContent).to.be.empty
    })

    it('should render form buttons correctly', () => {
      let myButton = new Button({ type: 'primary', size: 'mini', icon: 'check', text: 'Submit', classNames: ['btn-form']}, [])
      expect(myButton.element.className).to.contain('btn-form')
    })

  })

})
