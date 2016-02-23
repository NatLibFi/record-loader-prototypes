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
    define(['chai', '../lib/logger/prototype'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('chai'), require('../lib/logger/prototype'));
  }

}(this, factory));

function factory(chai, createLoggerFactory)
{

  'use strict';

  var expect = chai.expect;

  describe('logger', function() {

    describe('factory', function() {

      it('Should be a function', function() {
        expect(createLoggerFactory).to.be.a('function');
      });

      it('Should create a function', function() {
        expect(createLoggerFactory()).to.be.a('function');
      });

      describe('loggerFactory', function() {

        it('Should create the expected object', function() {
          expect(createLoggerFactory()()).to.be.an('object').and.to
            .respondTo('error').and.to
            .respondTo('warn').and.to
            .respondTo('info').and.to
            .respondTo('debug').and.to
            .respondTo('trace');
        });
        
        describe('object', function() {
          
          describe('#error', function() {

            it('It should log an error message', function() {
              expect(createLoggerFactory()().error).to.not.throw();             
            });

          });
          
          describe('#warn', function() {

            it('It should log a warning message', function() {
              expect(createLoggerFactory()('warn').warn).to.not.throw();
            });

            it('It should not log a warning message', function() {
              expect(createLoggerFactory()().warn).to.not.throw();
            });

          });
          
          describe('#info', function() {

            it('It should log a info message', function() {
              expect(createLoggerFactory()('info').info).to.not.throw();
            });

            it('It should not log a info message', function() {
              expect(createLoggerFactory()().info).to.not.throw();
            });

          });
          
          describe('#debug', function() {

            it('It should log a debug message', function() {
              expect(createLoggerFactory()('debug').debug).to.not.throw();
            });

            it('It should not log a debug message', function() {
              expect(createLoggerFactory()().debug).to.not.throw();
            });

          });
          
          describe('#trace', function() {

            it('It should log a trace message', function() {
              expect(createLoggerFactory()('trace').trace).to.not.throw();
            });

            it('It should not log a trace message', function() {
              expect(createLoggerFactory()().trace).to.not.throw();
            });

          });
          
          
          it('It should contain prefixes in the message', function() {
            expect(createLoggerFactory()('debug', ['FOO', 'BAR']).debug).to.not.throw();
          });

          it('It should contain the module name in the message', function() {
            expect(createLoggerFactory()('debug', undefined, 'FOOBAR').debug).to.not.throw();
          });

          it('It should contain prefixes and the module name in the message', function() {
            expect(createLoggerFactory()('debug', ['FOO', 'BAR'], 'FOOBAR').debug).to.not.throw();
          });
          
        });

      });

    });

  });

}
