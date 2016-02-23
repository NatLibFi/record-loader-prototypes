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
    define(['chai', 'chai-as-promised', '../lib/record-set/prototype'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('chai'), require('chai-as-promised'), require('../lib/record-set/prototype'));
  }

}(this, factory));

function factory(chai, chaiAsPromised, recordSetFactory)
{

  'use strict';

  var expect = chai.expect;
  
  chai.use(chaiAsPromised);

  describe('record-set', function() {

    describe('factory', function() {

      it('Should be be a function', function() {
        expect(recordSetFactory).to.be.a('function');
      });

      it('Should create a proper object', function() {
        expect(recordSetFactory()).to.be.an('object').and.to
          .respondTo('initialise').and.to
          .respondTo('next').and.to
          .respondTo('setLogger');
      });


      describe('object', function() {
        
        it('Should set logger succesfully', function() {
          expect(recordSetFactory().setLogger).to.not.throw();
        });

        it('Should initialise succesfully', function() {
          return expect(recordSetFactory().initialise()).to.eventually.become.undefined;
        });

        describe('#next', function() {

          it('Should resolve with the next record succesfully', function() {
            return expect(recordSetFactory().initialise().then(function() {
              return recordSet.next();
            })).to.eventually.become.undefined;
          });
          
          it('Should resolve with the next record and related records succesfully', function() {
            return expect(recordSetFactory().initialise(undefined, 1).then(function() {
              return recordSet.next();
            })).to.eventually.become.undefined;
          });
          
          it('Should resolve with undefined succesfully because there are no more records left', function() {
            return expect(recordSetFactory().initialise().then(function() {
              return recordSet.next();
            })).to.eventually.become.undefined;
          });
          
        });
        
      });
      
    });
    
  });
  
}
