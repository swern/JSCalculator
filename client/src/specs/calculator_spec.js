var Calculator = require('../models/calculator');
var assert = require('assert');


describe('calculator', function(){

  beforeEach( function() {
      calculator = new Calculator();
    });

  it( "can add", function() {
     calculator.answer(" 6 + 9 ");
     assert.equal( 15, calculator.result );
   });

  it( "can subtract", function() {
     calculator.answer(" 11 - 3 ");
     assert.equal( 8, calculator.result );
   });

  it( "can multiply", function() {
     calculator.answer(" 0.1 * 0.2 ");
     assert.equal( 0.02, calculator.result );
   });

  it( "can multiply", function() {
     calculator.answer(" 30 / 2 ");
     assert.equal( 15, calculator.result );
   });

  it ("can handle syntax error", function(){
      calculator.answer(" 20 + @ +");
      assert.equal( '0', calculator.result);
  });

});