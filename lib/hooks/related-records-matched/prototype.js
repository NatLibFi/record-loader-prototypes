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
    define(['@natlibfi/es6-polyfills/lib/polyfills/promise'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('@natlibfi/es6-polyfills/lib/polyfills/promise'));
  }

}(this, factory));

function factory(Promise)
{
  
  'use strict';

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
       * @param {object} record_store - {@link module:record-loader-prototypes/lib/record-store/prototype}
       * @returns {object} Self
       */
      setRecordStore: function()
      {
        return obj;
      },
      /**
       * @param {object[]} records - An array of records last processed by the match step
       * @returns {Promise} - A Promise that resolves with an array of records
       */
      run: function(records)
      {
        return Promise.resolve(records);
      }
    };

    return obj;

  };

}
