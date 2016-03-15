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
    define(['chai', 'chai-as-promised', '../lib/record-store/prototype'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('chai'), require('chai-as-promised'), require('../lib/record-store/prototype'));
  }

}(this, factory));

function factory(chai, chaiAsPromised, recordStoreFactory)
{

  'use strict';

  var expect = chai.expect;
  
  chai.use(chaiAsPromised);

  describe('record-store', function() {

    describe('factory', function() {

      it('Should be a function', function() {
        expect(recordStoreFactory).to.be.a('function');
      });

      it('Should return the expected object', function() {
        expect(recordStoreFactory()).to.be.an('object').and.to
          .respondTo('setConverter').and.to
          .respondTo('setLogger').and.to
          .respondTo('toggleTransaction').and.to
          .respondTo('rollback').and.to
          .respondTo('create').and.to
          .respondTo('read').and.to
          .respondTo('update').and.to
          .respondTo('delete');
      });

      describe('object', function() {

        it('Should set the logger succesfully', function() {
          expect(recordStoreFactory().setLogger).to.not.throw();
        });

        it('Should set the converter succesfully', function() {
          expect(recordStoreFactory().setConverter).to.not.throw();
        });

        it('Should toggle the transaction option succesfully', function() {
          expect(recordStoreFactory().toggleTransaction).to.not.throw();
        });

        describe('#create', function() {

          it('Should create the record successfully and return the expected object', function() {
            return expect(recordStoreFactory().create()).to.eventually.eql({id: undefined});
          });

        });

        describe('#read', function() {

          it('Should read records successfully and return an array of records', function() {
            return expect(recordStoreFactory().read()).to.eventually.eql([]);
          });

        });

        describe('#update', function() {

          it('Should update the record successfully and return the expected object', function() {
            return expect(recordStoreFactory().update()).to.eventually.eql({});
          });

        });

        describe('#delete', function() {

          it('Should delete the record successfully ', function() {
            return expect(recordStoreFactory().delete()).to.eventually.become.undefined;
          });

        });

        describe('#rollback', function() {

          it('Should perform a rollback succesfully', function() {
            return expect(recordStoreFactory().rollback()).to.eventually.become.undefined;
          });

        });

      });

    });

  });

}
