let button = document.querySelector(".calculator_button_message");

button.addEventListener('click', function(event) {
    event.preventDefault(); 
    let numberA = +document.querySelector('input[name="number_a"]').value;
    let numberB = +document.querySelector('input[name="number_b"]').value;
    let selectElement = document.querySelector('.calculator__chois');
    let result = '';
    
    selectElement.addEventListener('change', function() {
      result = selectElement.value;
      console.log(result);
    });
    
    console.log(`number a ${numberA}, number b ${numberB}`);
  
    let answer = 0;
    
    switch(result) {
      case '+':
        answer = numberA + numberB;
        break;
      case '-':
        answer = numberA - numberB;
        break;
      case '*':
        answer = numberA * numberB;
        break;
      case '/':
        answer = numberA / numberB;
        break;
      default:
        console.log("Invalid operator");
    }

    let mainDiv = document.querySelector(".calculator");
    let newElem = document.createElement("p");
    let newText = document.createTextNode(`${numberA} ${result} ${numberB} = ${answer}`);

    newElem.appendChild(newText);
    mainDiv.appendChild(newElem);
});
