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
    define(['chai', '../lib/converters/prototype'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('chai'), require('../lib/converters/prototype'));
  }

}(this, factory));

function factory(chai, converterFactory)
{

  'use strict';

  var expect = chai.expect;

  describe('converter', function() {

    describe('factory', function() {

      it('Should be a function', function() {
        expect(converterFactory).to.be.a('function');
      });

      it('Should return the expected object', function() {
        expect(converterFactory()).to.an('object').and.to
          .respondTo('convert').and.to
          .respondTo('setLogger');
      });

      describe('object', function() {
        
        it('Should set a logger succesfully', function() {
          expect(converterFactory().setLogger).to.not.throw();
        });

        it('Should convert record to a native format', function() {
          expect(converterFactory().convert).to.not.throw();
        });

        it('Should fail to convert unsupported record type to native format', function() {
          expect(converterFactory().convert).to.not.throw();
        });

      });

    });
    
  });

}
