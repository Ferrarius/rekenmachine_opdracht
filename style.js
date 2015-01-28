//get Elements from HTML to change
var output = document.getElementById("screen"),
    buttons = document.getElementsByClassName("button");

//Add click events for every button
for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", changeScreen);
}

//Function when button is pressed
function changeScreen() {
    output.innerText += this.innerText; //data from button on screen except for the next if statements
    if(this.id === "clear")
    {
        output.innerText = ""; //output screen is empty when clear button is pressed
    }

    if(this.id === "equals")
    {
        calculate(); //calculate function activated when equals button is pressed
    }
}

//Calculate function !! NO EVAL !!
function calculate() {
    var operators = ["+", "-", "*", "/"]; //operators in array for for-loop

    for(var i = 0; i < operators.length; i++) {
        if(output.innerText.indexOf(operators[i]) !== -1) //if indexOf the screen is not -1 it means the operator is there.
        {
            var numbers = output.innerText.split(operators[i]);

            switch (operators[i]) { //switch for each operator
                case "+":
                    output.innerText = parseInt(numbers[0])+parseInt(numbers[1]);
                    break;
                case "-":
                    output.innerText = parseInt(numbers[0])-parseInt(numbers[1]);
                    break;
                case "*":
                    output.innerText = parseInt(numbers[0])*parseInt(numbers[1]);
                    break;
                case "/":
                    output.innerText = parseInt(numbers[0])/parseInt(numbers[1]);
                    break;
                default:
                    output.innerText = "Error";
                    break;
            }
        }
    }

    //On number error NaN is changed in Error
    if(output.innerText === "NaN")
    {
        output.innerText = "Error";
    }
}
