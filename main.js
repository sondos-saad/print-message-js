
let inputEle = document.getElementById('inputMsg');
let btnEle = document.getElementById('btn');
let msgEle = document.getElementById('AddMsg');

btnEle.onclick = function(){
    let output = inputEle.value;
    msgEle.innerHTML = output;
    inputEle.value = "";
}