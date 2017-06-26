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

/* istanbul ignore next: umd wrapper */
(function (root, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    define([
      'es6-polyfills/lib/polyfills/object',
      'es6-polyfills/lib/polyfills/promise'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(
      require('es6-polyfills/lib/polyfills/object'),
      require('es6-polyfills/lib/polyfills/promise')
    );
  }

}(this, factory));

function factory(Object, Promise)
{
  
  'use strict';

  /**
   * @typedef {object} loader_results
   * @property {object} statistics
   * @property {number} statistics.processed - Number of records processed
   * @property {number} statistics.succeeded - Number of records succesfully processed
   * @property {number} statistics.skipped - Number of records skipped
   * @property {number} statistics.failed - Number of records that failed processing
   * @property {object} statistics.recordStore - Number of operations in the record store
   * @property {number} statistics.recordStore.created - Number of records created
   * @property {number} statistics.recordStore.updated - Number of records updated
   * @property {number} statistics.recordStore.deleted - Number of records deleted
   * @property {object} processing
   * @property {object[]} processing.records
   * @property {boolean} processing.records[].[failed]
   * @property {boolean} processing.records[].[error]
   * @property {boolean} processing.records[].[stack]
   * @property {boolean} processing.records[].[skipped]
   * @property {object} processing.records[].[data]
   * @property {object[]} processing.records[].[matched]
   * @property {object[]} processing.records[].[merged]
   * @property {module:record-loader-prototypes/lib/record-store~record_store_transaction} [processing.records[].recordStore]
   */

  /**
   * @readonly
   * @enum {number}
   */
  var RESULT_LEVELS = Object.seal(Object.freeze({
    statistics: 1,
    recordMetaData: 2,
    recordData: 4
  }));

  return Object.assign(function(parameters) {
    
    var obj = {
      /**
       * Set logger for the module
       * @param {object} logger - {@link module:record-loader-prototypes/lib/logger/prototype|logger}
       * @returns {object} Returns self
       */
      setLogger: function()
      {
        return obj;
      },
      /**
       * Set result level
       * @param {number} level - Set the result level. The level is a bit field consisting of {@link RESULT_LEVELS|supported values}
       * @returns {object} Returns self
       */
      setLevel: function()
      {
        return obj;
      },
      run: function(results)
      {
        return Promise.resolve(results);
      }
    };

    return obj;

  }, {                       
    /**
     * @returns {@link RESULTS_LEVELS|An object} describing the supported result levels
     */
    getLevels: function()
    {
      return RESULT_LEVELS;
    }
  });

}
