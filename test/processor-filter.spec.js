/**
 *
 * @licstart  The following is the entire license notice for the JavaScript code in this file. 
 *
 * Base prototypes of processors, converters, record store and record set for recordLoader
 *
 * Copyright (c) 2015-2016 University Of Helsinki (The National Library Of Finland)
 *
 * This file is part of record-loader-prototypes
 *
 * record-loader-prototypes is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *  
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *  
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this file.
 *
 **/

(function (root, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['chai', 'chai-as-promised', '../lib/processors/filter/prototype'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('chai'), require('chai-as-promised'), require('../lib/processors/filter/prototype'));
  }

}(this, factory));

function factory(chai, chaiAsPromised, filterFactory)
{

  'use strict';

  var expect = chai.expect;
  
  chai.use(chaiAsPromised);

  describe('processor-filter', function() {

    describe('factory', function() {

      it('Should be a function', function() {
        expect(filterFactory).to.be.a('function');
      });

      it('Should return the expected object', function() {
        expect(filterFactory()).to.be.an('object').and.to
          .respondTo('setConverter').and.to
          .respondTo('setLogger').and.to
          .respondTo('run');
      });

      describe('object', function() {

        it('Should set the logger succesfully', function() {
          expect(filterFactory().setLogger).to.not.throw();
        });

        it('Should set the converter succesfully', function() {
          expect(filterFactory().setConverter).to.not.throw();
        });

        describe('#run', function() {

          it("Should resolve with an array which has an non-undefined value as it's first element because the record passes the filter", function() {
            return expect(filterFactory().run()).to.eventually.eql([1]);
          });

          it("Should resolve with an array which has an undefined value as it's first element because the record doesn't pass the filter", function() {
            return expect(filterFactory().run()).to.eventually.eql([1]);
          });

          it('Should reject if there are any errors', function() {
            return expect(filterFactory().run()).to.eventually.eql([1]);
          });

        });

      });

    });

  });

}
