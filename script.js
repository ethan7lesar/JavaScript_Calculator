/*Intializing a variable called display which takes in from the html input with the class of screen */

let display = document.getElementById('screen'); 

 function clearSum(){
  display.value = '';

 }

  function input(i){
      display.value += i

 } 

  function evaluateSum(){

      display.value = eval(display.value)

  }
    

  


 