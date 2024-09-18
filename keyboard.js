let userInputE1=document.getElementById("userInput")
let keydownCounterE1=document.getElementById("keydownCounter")
let keydownCodeE1=document.getElementById("keydownCode")
let count=0

userInputE1.addEventListener("keydown",function(event){
    count+=1 
    keydownCounterE1.textContent=count 
    keydownCodeE1.textContent=event.keyCode
})