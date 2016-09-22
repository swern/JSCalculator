var Calculator = require('./models/calculator');

window.onload = function(){
  main();
}

function main(){
  this.calc = new Calculator;
  // console.log("webpack app started");
  var result = document.getElementById('result');
  var textBox = document.getElementById('text-box')
  // console.log(result);
  result.addEventListener('click',function(){
    // console.log("button clicked!");
    textBox.value = eval(textBox.value).toFixed(4);
  }.bind(this))
  console.log("Sam is God");
  }


  