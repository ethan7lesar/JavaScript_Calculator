/*Intializing a variable called display which takes in from the html imput with the class of screen */

let display = document.getElementById('screen'); 

 function clearSum(){
  display.value = '';

 }

  function input(number){
      display.value += number

 } 

  function evaluateSum(){

      display.value = eval(display.value)

  }
    

  


 