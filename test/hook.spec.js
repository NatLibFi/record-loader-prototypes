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
    define(['chai', 'chai-as-promised', '../lib/hooks/prototype'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('chai'), require('chai-as-promised'), require('../lib/hooks/prototype'));
  }

}(this, factory));

function factory(chai, chaiAsPromised, hookFactory)
{

  'use strict';
  
  var expect = chai.expect;
  var should = chai.should();
  
  chai.use(chaiAsPromised);

  describe('hook', function() {

    describe('factory', function() {

      it('Should be be a function', function() {
        expect(hookFactory).to.be.a('function');
      });

      it('Should create a proper object', function() {
        expect(hookFactory()).to.be.an('object').and.to
          .respondTo('setRecordStore').and.to
          .respondTo('setRecordSet').and.to
          .respondTo('setConverter').and.to
          .respondTo('setLogger').and.to
          .respondTo('setResults').and.to
          .respondTo('run');
      });

      describe('object', function() {

        it('Should set a record store succesfully', function() {
          expect(function() {
            hookFactory().setRecordStore({});
          }).to.not.throw();
        });

        it('Should set a record set succesfully', function() {
          expect(function() {
            hookFactory().setRecordSet({});
          }).to.not.throw();
        });

        it('Should set a converter succesfully', function() {
          expect(function() {
            hookFactory().setConverter({});
          }).to.not.throw();
        });

        it('Should set results succesfully', function() {
          expect(function() {
            hookFactory().setResults({});
          }).to.not.throw();
        });

        it('Should set a logger succesfully', function() {
          expect(function() {
            hookFactory().setLogger({});
          }).to.not.throw();
        });
        
        describe('#run', function() {

          it('Should resolve', function() {
            return expect(hookFactory().run()).to.eventually.become.undefined;
          });

        });

      });

    });

  });

}
