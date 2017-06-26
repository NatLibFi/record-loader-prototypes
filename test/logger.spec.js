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
      '../lib/logger/prototype'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(
      require('chai'),
      require('../lib/logger/prototype')
    );
  }

}(this, factory));

function factory(chai, loggerFactory)
{

  'use strict';

  var expect = chai.expect;

  describe('logger', function() {

    describe('factory', function() {

      it('Should create the expected object', function() {
        expect(loggerFactory()).to.be.an('object')
          .and.to.respondTo('setLevel')
          .and.to.respondTo('error')
          .and.to.respondTo('warning')
          .and.to.respondTo('info')
          .and.to.respondTo('debug');
      });

      describe('#getLevels', function() {

        it('Should return the expected object which is immutable', function() {
          expect(loggerFactory.getLevels()).to.have.all.keys(['error', 'warning', 'info', 'debug']).and.to.be.frozen.and.to.be.sealed /* jshint -W030 */;
        });

      });

      describe('object', function() {

        var logger = loggerFactory();

        describe('#setLevel', function() {

          it('Should return itself', function() {
            expect(logger.setLevel()).to.eql(logger);
          });

        });

        describe('#getLevel', function() {

          it('Should return the current logging level', function() {            
            expect(logger.getLevel()).to.be.undefined /* jshint -W030 */;
          });

        });

        describe('#getName', function() {

          it('Should return undefined (Because the logger is not an instance', function() {
            expect(logger.getName()).to.be.undefined /* jshint -W030 */;
          });
          
        });

        describe('#setAutoFlush', function() {


          it('Should return itself', function() {
            expect(logger.setAutoFlush()).to.eql(logger);
          });

          it('Should automate the flushing of the message stack', function() {});


        });

        describe('#flush', function() {

          it('Should return itself', function() {
            expect(logger.flush()).to.eql(logger);
          });

          it('Should flush the message stack', function() {});

        });

        describe('#error', function() {

          it('Should return itself', function() {
            expect(logger.error()).to.eql(logger);
          });

          it('Should log the message', function() {

            logger.error('foobar');

            /**
             * Implementation specific test logic goes here
             */

          });

        });

        describe('#warning', function() {

          it('Should return itself', function() {
            expect(logger.warning()).to.eql(logger);
          });

          it('Should log the message', function() {

            logger
              .setLevel('warning')
              .warning('foobar');

            /**
             * Implementation specific test logic goes here
             */

          });

          it('Should not log the message', function() {

            logger
              .setLevel('error')
              .warning('foobar');

            /**
             * Implementation specific test logic goes here
             */

          });
        
        });
        
        describe('#info', function() {

          it('Should return itself', function() {
            expect(logger.info()).to.eql(logger);
          });

          it('Should log the message', function() {

            logger
              .setLevel('info')
              .info('foobar');

            /**
             * Implementation specific test logic goes here
             */

          });

          it('Should not log the message', function() {

            logger
              .setLevel('error')
              .info('foobar');

            /**
             * Implementation specific test logic goes here
             */

          });
        
        });
        
        describe('#debug', function() {

          it('Should return itself', function() {
            expect(logger.debug()).to.eql(logger);
          });

          it('Should log the message', function() {

            logger
              .setLevel('debug')
              .debug('foobar');

            /**
             * Implementation specific test logic goes here
             */

          });

          it('Should not log the message', function() {

            logger
              .setLevel('error')
              .debug('foobar');

            /**
             * Implementation specific test logic goes here
             */

          });

        });

        describe('#createInstance', function() {

          it('Should throw because instance name is not provided', function() {
            expect(logger.createInstance).to.throw(Error, /^Name must be provided$/);
          });

          it('Should create a new logger instance', function() {

            var instance = logger.createInstance('foobar');

            expect(instance).to.be.an('object').and.to
              .respondTo('createInstance').and.to
              .respondTo('setLevel').and.to
              .respondTo('getLevel').and.to
              .respondTo('getName').and.to
              .respondTo('flush').and.to
              .respondTo('setAutoFlush').and.to
              .respondTo('error').and.to
              .respondTo('warning').and.to
              .respondTo('info').and.to
              .respondTo('debug');

            expect(instance.getName()).to.equal('foobar');

          });

        });
        
      });

    });

  });

}
