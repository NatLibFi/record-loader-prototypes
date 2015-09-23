/**
 *
 * @licstart  The following is the entire license notice for the JavaScript code in this file. 
 *
 * Base prototypes of processors, record store and record set for recordLoader
 *
 * Copyright (c) 2015 University Of Helsinki (The National Library Of Finland)
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
 * for the JavaScript code in this page.
 *
 **/

/* istanbul ignore next: umd wrapper */
(function (root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['es6-polyfills/lib/promise'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('es6-polyfills/lib/promise'));
    }

}(this, factory));

function factory(Promise) {

    'use strict';

    return function(parameters) {
	return {
	    initialise: function(input_data)
	    {
		return Promise.reject('Not implemented');
	    },
	    next: function()
	    {
		return Promise.reject('Not implemented');
	    }
	};
    };

}