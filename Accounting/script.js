const message = document.getElementById("input-message");
const button = document.getElementById("btn");
const output = document.getElementById("output");
function out(){
  output.innerHTML = message.value;
}
button.addEventListener('click',out);