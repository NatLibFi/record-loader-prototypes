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
    define(['es6-polyfills/lib/polyfills/promise'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('es6-polyfills/lib/polyfills/promise'));
  }

}(this, factory));

function factory(Promise)
{
  
  'use strict';

  /**
   * @typedef {object} record_store_transaction
   * @property {object[]} [created=[]] - An array of created records
   * @property {object[]} [updated=[]] - An array of updated records
   * @property {object[]} [deleted=[]] - An array of deleted records
   */

  return function(parameters)
  {

    var obj = {
      /**
       * Set logger for the module
       * @param {object} logger - {@link module:record-loader-prototypes/lib/logger/prototype|logger}
       * @returns {object} Self
       */
      setLogger: function()
      {
        return obj;
      },
      /**
       * @param {record_store_transaction} transaction - Record store transaction to be rolled back
       * @returns {Promise} A Promise that resolves with an {@link record_store_transaction|object describing the operations replacing the transaction}. If the promise resolves with undefined the transaction was completely cancelled
       */
      rollback: function()
      {
        return Promise.resolve();
      },
      /**
       * @param {object|array} record_data - A record or an array of records to create in the record store
       * @returns {Promise} A Promise that resolves with an array of objects describing the created records
       */
      create: function()
      {
        return Promise.resolve({});
      },
      /**
       * @name read
       * @param {*} query - A query used to find records in the record store
       * @returns {Promise} A Promise that resolves with an array of records found using the query
       */
      read: function()
      {
        return Promise.resolve([]);
      },
      /**
       * @param {*|*[]} query - A query or an array of queries used to find records in the record store
       * @param {object|object[]} record_data - A record or an array of records to update the found records with
       * @returns {Promise} A Promise that resolves with an array of objects representing the updated records
       */
      update: function()
      {
        return Promise.resolve([]);
      },
      /**
       * @param {*} query - A query used to find records in the record store
       * @returns {Promise} A Promise that resolves with an array of objects representing the deleted records
       */
      delete: function()
      {
        return Promise.resolve([]);
      }
    };

    return obj;

  };

}
