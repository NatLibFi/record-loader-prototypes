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
       * @param {object} logger - Set {@link module:record-loader-prototypes/lib/logger/prototype|logger} for the module
       * @returns {object} self
       */
      setLogger: function(logger) {
        return obj;
      },
      /**
       * @param {*} input_data - Input data which is used to initialize the set to provide records
       * @return {undefined}
       */
      initialize: function(input_data)
      {
        return Promise.resolve();
      },
      /**
       * @returns {Promise} Return a Promise, which resolves with an array of objects (A record and it's possibly related records) or with undefined if there are no more records available in the set.
       */
      get: function()
      {
        return Promise.resolve([]);
      }
    };

    return obj;

  };

}
