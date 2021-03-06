/**
 *
 * @licstart  The following is the entire license notice for the JavaScript code in this file. 
 *
 * Base prototypes of recordLoader modules
 *
 * Copyright (c) 2015-2017 University Of Helsinki (The National Library Of Finland)
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

(function(root, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    define([
      'chai/chai',
      'chai-as-promised',
      '@natlibfi/es6-polyfills/lib/polyfills/promise',
      '../../lib/processors/preprocess/prototype'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(
      require('chai'),
      require('chai-as-promised'),
      require('@natlibfi/es6-polyfills/lib/polyfills/promise'),
      require('../../lib/processors/preprocess/prototype')
    );
  }

}(this, factory));

function factory(chai, chaiAsPromised, Promise, processorFactory)
{

  'use strict';

  var expect = chai.expect;

  chai.use(chaiAsPromised);
  
  describe('processors', function() {

    describe('preprocess', function() {

      describe('factory', function() {

        it('Should create the expected object', function() {
          expect(processorFactory()).to.be.an('object')
            .and.to.respondTo('setLogger')
            .and.to.respondTo('run');
        });

        describe('object', function() {

          var processor = processorFactory();

          describe('#setLogger', function() {

            it('Should return itself', function() {
              expect(processor.setLogger()).to.eql(processor);
            });

          });

          describe('#run', function() {

            it('Should return a Promise which resolves with an object', function() {
              return processor.run().then(function(result) {
                expect(result).to.be.an('object').and.to.contain.all.keys(['record']); /* jshint -W030 */
              });
            });

            it('Should modify the record', function() {});
            
          });

        });

      });

    });

  });

}
