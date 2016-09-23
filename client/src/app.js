var Calculator = require('./models/calculator.js');

window.onload = function(){
  main();
}

function main(){
  this.calc = new Calculator();
  
  var equals = document.getElementById('equals');
  var textBox = document.getElementById('text-box')
  

  equals.addEventListener('click',function(){
    console.log("button clicked!");
    
    textBox.value = this.calc.answer(textBox.value);
  }.bind(this))
  
  }


  