var Calculator = require('./models/calculator.js');

window.onload = function(){
  main();
}

function main(){
  this.calc = new Calculator();
  // console.log("webpack app started");
  var equals = document.getElementById('equals');
  var textBox = document.getElementById('text-box')
  console.log(equals);

  equals.addEventListener('click',function(){
    console.log("button clicked!");
    // textBox.value = eval(textBox.value).toFixed(4);
    textBox.value = this.calc.answer(textBox);
  }.bind(this))
  // console.log("Sam is God");
  }


  