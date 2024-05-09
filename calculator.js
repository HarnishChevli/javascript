function addToDisplay(value){
    document.getElementById('display').value += value;
}
function clearDisplay(){
    document.getElementById('display').value = "";
    
}
function calculate(){
    var expression = document.getElementById('display').value;
    var result = eval(expression)
    document.getElementById('display').value = result;
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }