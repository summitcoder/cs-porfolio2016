
//this part of the code we identify the variable so the javascript can use the code below it. 
var usrTask = document.getElementById("usrTask");
var textstyle = document.getElementById("textstyle");
var display = document.getElementById("display");
var submitBtn = document.getElementById("submitBtn");
var clearbtn = document.getElementById("clearbtn");

//this is the code that actually does something, the if statement starts it out 
//if the user clicks something else it goes to one of the else if statements and runs the code there. 
submitBtn.addEventListener("click", function(){

   var newTask = usrTask.value;
   
   if (textstyle.value === "none") {
       display.innerHTML += "<div>" + newTask + "</div>";
   }
    else if(textstyle.value === "red"){
        display.innerHTML += '<div style="color: red;">' + newTask + '</div>';
    }
    else if(textstyle.value ==="bold"){
        display.innerHTML += '<div style="font: bold 20px/30px Times New Roman, serif;">' +newTask+ '</div>';
    }
    else if(textstyle.value ==="underline"){
        display.innerHTML += '<div style="text-decoration: underline;">' +newTask+ '</div>';
    }
    else if(textstyle.value ==="italics"){
        display.innerHTML += '<div style="font: italic 15px/30px Times New Roman, serif;">' +newTask+ '</div>';
    }

});

//this is so the buttons start working.You add an event listener so the when you click the button it works.
//this also waits for the user to click the button.
display.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
});

clearbtn.addEventListener("click",function(evt){
    display.innerHTML = ""; 
});