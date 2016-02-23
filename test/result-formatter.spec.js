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
    define(['chai', 'chai-as-promised', '../lib/result-formatters/prototype'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('chai'), require('chai-as-promised'), require('../lib/result-formatters/prototype'));
  }

}(this, factory));

function factory(chai, chaiAsPromised, resultFormatterFactory)
{

  'use strict';

  var expect = chai.expect;
  
  chai.use(chaiAsPromised);

  describe('result-formatter', function() {

    describe('factory', function() {

      it('Should be a function', function() {
        expect(resultFormatterFactory).to.be.a('function');
      });

      it('Should return the expected object', function() {
        expect(resultFormatterFactory()).to.be.an('object').and.to
          .respondTo('setLogger').and.to
          .respondTo('match')
          .respondTo('merge')
          .respondTo('load')
          .respondTo('data')
          .respondTo('additional');
      });

      describe('object', function() {

        it('Should set the logger succesfully', function() {
          expect(resultFormatterFactory().setLogger).to.not.throw();
        });

        describe('#merge', function() {

          it("Should format the result according to 'total' results level", function() {
            expect(function() {
              resultFormatterFactory().merge({}, 'total');
            }).to.not.throw();
          });

          it("Should format the result according to 'record' results level", function() {
            expect(function() {
              resultFormatterFactory().merge({}, 'record');
            }).to.not.throw();
          });

          it("Should format the result according to 'debug' results level", function() {
            expect(function() {
              resultFormatterFactory().merge({}, 'debug');
            }).to.not.throw();
          });

        });

        describe('#match', function() {

          it("Should format the result according to 'total' results level", function() {
            expect(function() {
              resultFormatterFactory().match({}, 'total');
            }).to.not.throw();
          });

          it("Should format the result according to 'record' results level", function() {
            expect(function() {
              resultFormatterFactory().match({}, 'record');
            }).to.not.throw();
          });

          it("Should format the result according to 'debug' results level", function() {
            expect(function() {
              resultFormatterFactory().match({}, 'debug');
            }).to.not.throw();
          });

        });

        describe('#load', function() {

          it("Should format the result according to 'total' results level", function() {
            expect(function() {
              resultFormatterFactory().load({}, 'total');
            }).to.not.throw();
          });

          it("Should format the result according to 'record' results level", function() {
            expect(function() {
              resultFormatterFactory().load({}, 'record');
            }).to.not.throw();
          });

          it("Should format the result according to 'debug' results level", function() {
            expect(function() {
              resultFormatterFactory().load({}, 'debug');
            }).to.not.throw();
          });

        });
        
        describe('#additional', function() {

          it("Should format filter step result according to 'total' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'filter', 'total');
            }).to.not.throw();
          });

          it("Should format filter the result according to 'record' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'filter', 'record');
            }).to.not.throw();
          });

          it("Should format filter step the result according to 'debug' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'filter', 'debug');
            }).to.not.throw();
          });

          it("Should format preprocess step result according to 'total' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'preprocess', 'total');
            }).to.not.throw();
          });

          it("Should format preprocess the result according to 'record' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'preprocess', 'record');
            }).to.not.throw();
          });

          it("Should format preprocess step the result according to 'debug' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'preprocess', 'debug');
            }).to.not.throw();
          });

          it("Should format match step result according to 'total' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'match', 'total');
            }).to.not.throw();
          });

          it("Should format match the result according to 'record' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'match', 'record');
            }).to.not.throw();
          });

          it("Should format match step the result according to 'debug' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'match', 'debug');
            }).to.not.throw();
          });

          it("Should format merge step result according to 'total' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'merge', 'total');
            }).to.not.throw();
          });

          it("Should format merge the result according to 'record' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'merge', 'record');
            }).to.not.throw();
          });

          it("Should format merge step the result according to 'debug' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'merge', 'debug');
            }).to.not.throw();
          });

          it("Should format load step result according to 'total' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'load', 'total');
            }).to.not.throw();
          });

          it("Should format load the result according to 'record' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'load', 'record');
            }).to.not.throw();
          });

          it("Should format load step the result according to 'debug' results level", function() {
            expect(function() {
              resultFormatterFactory().additional({}, 'load', 'debug');
            }).to.not.throw();
          });

        });

        describe('#data', function() {

          it("Should format input record data according to 'total' results level", function() {
            expect(function() {
              resultFormatterFactory().data({}, 'total', 'input');
            }).to.not.throw();
          });

          it("Should format input record data according to 'record' results level", function() {
            expect(function() {
              resultFormatterFactory().data({}, 'record', 'input');
            }).to.not.throw();
          });

          it("Should format input record data result according to 'debug' results level", function() {
            expect(function() {
              resultFormatterFactory().data({}, 'debug', 'input');
            }).to.not.throw();
          });

          it("Should format output record data according to 'total' results level", function() {
            expect(function() {
              resultFormatterFactory().data({}, 'total', 'output');
            }).to.not.throw();
          });

          it("Should format output record data according to 'record' results level", function() {
            expect(function() {
              resultFormatterFactory().data({}, 'record', 'output');
            }).to.not.throw();
          });

          it("Should format output record data result according to 'debug' results level", function() {
            expect(function() {
              resultFormatterFactory().data({}, 'debug', 'output');
            }).to.not.throw();
          });

        });

      });

    });

  });

}
