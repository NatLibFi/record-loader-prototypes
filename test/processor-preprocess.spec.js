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
    define(['chai', 'chai-as-promised', '../lib/processors/preprocess/prototype'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('chai'), require('chai-as-promised'), require('../lib/processors/preprocess/prototype'));
  }

}(this, factory));

function factory(chai, chaiAsPromised, preprocessFactory)
{

  'use strict';

  var expect = chai.expect;
  
  chai.use(chaiAsPromised);

  describe('processor-preprocess', function() {

    describe('factory', function() {

      it('Should be a function', function() {
        expect(preprocessFactory).to.be.a('function');
      });

      it('Should return the expected object', function() {
        expect(preprocessFactory()).to.be.an('object').and.to
          .respondTo('setConverter').and.to
          .respondTo('setLogger').and.to
          .respondTo('run');
      });

      describe('object', function() {

        it('Should set the logger succesfully', function() {
          expect(preprocessFactory().setLogger).to.not.throw();
        });

        it('Should set the converter succesfully', function() {
          expect(preprocessFactory().setConverter).to.not.throw();
        });

        describe('#run', function() {

          it("Should return an array which has the modified record as it's first element", function() {
            return expect(preprocessFactory().run({})).to.eventually.eql([{}]);
          });

          it("Should return an array which has the unmodified record as it's first element", function() {
            return expect(preprocessFactory().run({})).to.eventually.eql([{}]);
          });

        });

      });

    });

  });

}
