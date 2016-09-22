window.onload = function(){
  main();
}

function main(){
  console.log("webpack app started");
  var result = document.getElementById('result');
  var textBox = document.getElementById('text-box')
  console.log(result);
  result.addEventListener('click',function(){
    console.log("button clicked!");
    textBox.value = eval(textBox.value);
  }.bind(this))
  console.log("Sam is God");
  }


  