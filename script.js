/*Intializing a variable called display which takes in from the html input with the class of screen */

let display = document.getElementById('screen'); 
let operator = document.getElementsByClassName('.operator')

 function clearSum(){
  display.value = '';

 }

  function input(i){
    
    
    // if (!operator) {
    //     display.value += i;
    //     operator = true;
    //   } else if (i !== '+' && i !== '-' && i !== '*' && i !== '/') {
    //     display.value += i;
    //     operator = false;
    //   }
    // if(i != '.'){
        
        // display.value = display.length - 1;
        display.value += i
        
    //  } else if(i = '.')   {
        
         
    //    display.value = display.value.pop(-1)
    // }// else{
        // display.value += i;
    //  }

  }

  function evaluateSum(){

      display.value = eval(display.value)

  }

  function deleteInput(){
    display.value = display.value.slice(0, -1)
  }

//   function calc(x){
// display.value = x
// ;
//   }
//    function input(num) {
//     
//      let screenArray = display.split('')
//     
//      if(num != '.'){
//     
//          screenArray.push(num)
//          return display.value = screenArray.join('');
//      }
//      else if(num === '.' && screenArray.includes('.')){
//         
//          return display.value = screenArray.join('');
//      } else {
//          screenArray.push('.')
//          

//          display.value= screenArray.join('');
//      }
//  }
    

  


 