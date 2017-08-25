/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai'
import Button from '../src/button'

describe('Shared Behavior', () => {
  describe('setProperty', () => {
    it('should add a new property', () => {
      let myButton = new Button({text: 'My Button'}, [])
      myButton.setProperty({icon: 'check'})
      expect(myButton.properties.text).to.equal('My Button')
      expect(myButton.properties.icon).to.equal('check')
    })

    it('should edit an existing property', () => {
      let myButton = new Button({text: 'My Button'}, [])
      myButton.setProperty({text: 'Updated'})
      expect(myButton.properties.text).to.equal('Updated')
    })
  })
  describe('unsetProperty', () => {
    it('should unset an existing property', () => {
      let myButton = new Button({text: 'My button', icon: 'check'}, [])
      myButton.unsetProperty('text')
      expect(myButton.properties.text).to.not.exist
      expect(myButton.properties.icon).to.equal('check')
    })
  })
})
