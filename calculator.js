var drop = document.getElementById("drop")
var num1input = document.getElementById("num1")
var num2input = document.getElementById("num2")
var display = document.getElementById("display")
var btn = document.getElementById("btn")
var answer;
btn.addEventListener("click", function(){
    var num1 = num1input.value;
    var num2 = num2input.value;


    if(drop.value == "add"){
        answer = +num1 + +num2;
        display.innerHTML = answer;
    }
    else if(drop.value == "subtract"){
        answer = +num1 - +num2;
        display.innerHTML = answer;
    }
    else if(drop.value == "multiply"){
        var answerc = +num1 * +num2;
        display.innerHTML = answerc;
    }
    else if(drop.value == "divide"){
        var answerd = +num1 / +num2;
        display.innerHTML = answerd;
    }
    
     else if(drop.value == "square root"){
        var answerd = +num1 / +num2;
        display.innerHTML = answerd;
    }
    // else if
    
});

