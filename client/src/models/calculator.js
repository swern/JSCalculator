var Calculator = function(){
  this.result = 0;
}

Calculator.prototype = {

  result: function(){
    try {
       this.result = eval( this.result ).toFixed(4);
          return this.result;
        }
        catch(err) {
          alert( "Syntax Error" );
          return this.result;
        }
      }
    }
  



module.exports = Calculator;