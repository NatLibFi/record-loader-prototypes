/**
 *
 * @licstart  The following is the entire license notice for the JavaScript code in this file. 
 *
 * Base prototypes of processors, converters, record store and record set for recordLoader
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

(function (root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd) {
	define(['chai', 'chai-as-promised', '../lib/processors/load/prototype'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('chai'), require('chai-as-promised'), require('../lib/processors/load/prototype'));
    }

}(this, factory));

function factory(chai, chaiAsPromised, load)
{

    'use strict';

    var should = chai.should();
    
    chai.use(chaiAsPromised);

    describe('processor-load', function() {

	it('Should set the record store successfully', function() {
	    (function() {
		load().setRecordStore();
	    }).should.throw(/^Not implemented/);
	});

	it('Should run and return expected load result', function() {
	    return load().run().should.be.rejectedWith(/^Not implemented/);
	});

	it('Should run and reject because of invalid load options', function() {
	    return load().run().should.be.rejectedWith(/^Not implemented/);
	});
 
	it('Should set converter succesfully', function() {
	    (function(){
		load().setConverter();
	    }).should.throw(/^Not implemented/);
	});
   
    });

}