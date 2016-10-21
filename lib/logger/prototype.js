/**
 *
 * @licstart  The following is the entire license notice for the JavaScript code in this file. 
 *
 * Base prototypes of recordLoader modules
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

/* istanbul ignore next: umd wrapper */
(function (root, factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['es6-polyfills/lib/polyfills/object'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('es6-polyfills/lib/polyfills/object'));
  }

}(this, factory));

function factory(Object)
{

  'use strict';

  /**
   * @readonly
   * @enum {number}
   */
  var LOGGER_LEVELS = Object.seal(Object.freeze({
    error: 0,
    warning: 1,
    info: 2,
    debug: 3,
  }));

  return Object.assign(function(parameters) {
    
    function create(parameters)
    {
      
      var obj = {
        /**
         * @param {string} name - Name of the logger instance
         * @returns An instance of the logger retaining it's creators logging level, if set
         */
        createInstance: function(name)
        {
          if (typeof name === 'string') {

            return Object.assign(create(parameters), {
              getName: function()
              {
                return name;
              }
            }).setLevel(obj.getLevel());

          } else {
            throw new Error('Name must be provided');
          }
        },
        /**
         * @param {LOGGER_LEVELS} level - Logger level to set
         * @returns {object} self
         */
        setLevel: function()
        {
          return obj;
        },
        /**
         * @param {*} message - A message to log
         * @returns {object} self
         */
        error: function()
        {
          return obj;
        },
        /**
         * @param {*} message - A message to log
         * @returns {object} self
         */
        warning: function()
        {
          return obj;
        },
        /**
         * @param {*} message - A message to log
         * @returns {object} self
         */
        info: function()
        {
          return obj;
        },
        /**
         * @param {*} message - A message to log
         * @returns {object} self
         */
        debug: function()
        {
          return obj;
        },
        /**
         * Toggle automatic flushing. When automatic flushing is enabled #flush is called after each logging call
         * @param {boolean} toggle - If true the automatic flushing is turned on, otherwise off
         * @returns {object} self
         */
        setAutoFlush: function(toggle)
        {
          return obj;
        },
        /**
         * Flushes the logger's and all of it's instances message stacks by logging any unlogged messages. Called by record loader when processing of a record is completed. Implementation may or may not support this feature
         * @returns {object} self
         */
        flush: function()
        {
          return obj;
        },
        /**
         * @returns {string} Current {@link LOGGER_LEVELS|logging level}
         */
        getLevel: function()
        {        
        },
        /**
         * @returns {string} The name of the module, if this is an instance created with {@link #createInstance|createInstance}
         */
        getName: function()
        {        
        }
      };

      return obj;

    }

    return create(parameters);

  }, {
    /**
     * @returns {@link LOGGER_LEVELS|An object} describing the supported log levels
     */
    getLevels: function()
    {
      return LOGGER_LEVELS;
    }
  });

}
