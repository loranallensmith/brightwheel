/**
 * breit-wheeler
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Pane from '../src/pane';
import Button from '../src/button';

describe('Pane', () => {

  describe('render', () => {

    it('should create the right element', () => {
      let myPane = new Pane({}, []);
      expect(myPane.virtualElement.tagName).to.equal('DIV');
    });

    it('should render the correct class', () => {
      let myPane = new Pane({}, []);
      expect(myPane.virtualElement.properties.className).to.include('pane');
    });

    it('should include extra classes', () => {
      let myPane = new Pane({ text: 'My Pane', classNames:['extra-class', 'another-class']}, []);
      expect(myPane.virtualElement.properties.className).to.contain('extra-class another-class');
    });

    it('should render specified size', () => {
      let myPane = new Pane({ size: 'one-third'}, []);
      expect(myPane.virtualElement.properties.className).to.contain('one-third');
    });

    it('should render as a sidebar', () => {
      let myPane = new Pane({ sidebar: true }, []);
      expect(myPane.virtualElement.properties.className).to.contain('sidebar');
     });

    it('should render children', () => {
      let myButton = new Button({ text: 'Button' }, []);
      let myPane = new Pane({}, [myButton]);
      expect(myPane.children[0].constructor.name).to.equal('Button');
    });

  });

});
