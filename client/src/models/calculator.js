var Calculator = function(){
  this.result = 0;
}

Calculator.prototype = {

  answer: function(response){
    console.log(response)
    try {
      var sum = eval(response);
        this.result = parseFloat((sum).toFixed(8));
          return this.result;
        }
    catch(err) {
        // alert("Syntax Error");
        return this.result;
        }
  
  }
}
  



module.exports = Calculator;