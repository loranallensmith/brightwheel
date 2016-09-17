/**
 * breit-wheeler
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Table from '../src/table';

describe('Table', () => {

  describe('render method', () => {

    it('should create the right root element', () => {
      let myTable = new Table({}, [
        {
          id: 1,
          name: 'Type'
        }
      ]);
      expect(myTable.virtualElement.tagName).to.equal('TABLE');
    });

    it('should render headers', () => {
      let myTable = new Table({}, [
        {
          id: 1,
          name: 'Type'
        }
      ]);
      expect(myTable.virtualElement.children[0].tagName).to.equal('THEAD');
      expect(myTable.virtualElement.children[0].children[0].tagName).to.equal('TR');
      expect(myTable.virtualElement.children[0].children[0].children[0].tagName).to.equal('TH');
      expect(myTable.virtualElement.children[0].children[0].children[0].children[0].text).to.equal('id');
    });

    it('should render rows', () => {
      let myTable = new Table({}, [
        {
          id: 1,
          name: 'Type'
        }
      ]);
      expect(myTable.virtualElement.children[1].tagName).to.equal('TBODY');
      expect(myTable.virtualElement.children[1].children[0].tagName).to.equal('TR');
      expect(myTable.virtualElement.children[1].children[0].children[0].tagName).to.equal('TD');
      expect(myTable.virtualElement.children[1].children[0].children[0].children[0].text).to.equal('1')
    });

    it('should render striped tables', () => {
      let myTable = new Table({ striped: true }, [
        {
          id: 1,
          name: 'Type'
        }
      ]);
      expect(myTable.virtualElement.properties.className).to.contain('table-striped');
    });

    it('should include extra classes', () => {
      let myTable = new Table({ classNames:['extra-class', 'another-class'] }, [{
        id: 1,
        name: 'Type'
      }]);
      expect(myTable.virtualElement.properties.className).to.contain('extra-class another-class');
    });

  });

});
