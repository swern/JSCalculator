var calculator = require('../models/calculator');
var assert = require('assert');


describe('calculator', function(){

  beforeEach( function() {
      calculator = new Calculator();
    });

  it( "can add", function() {
     calculator.answer( 6 + 9 );
     assert.equal( 15, calculator.result );
   });


});