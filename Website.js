// here you put difine the images and the text that you are gonna use in the website
// You use the var tag and getElementById to difine them. I put Img next to the images
// so I wouldn't get them confused when I was adding the event listeners. I started the
// var with the information with hitlerinfo so I known that anything below that is info.

var hitlerImg = document.getElementById("hitlerImg")
var naziImg = document.getElementById("naziImg")
var sovietImg = document.getElementById("sovietImg")
var DDayImg = document.getElementById("DDayImg")
var battleofbritainImg = document.getElementById("battleofbritainImg")
var hitlerinfo = document.getElementById("hitlerinfo")
var naziterritory = document.getElementById("naziterritory")
var battleofbritain = document.getElementById("battleofbritain")
var sovietinvasion = document.getElementById("sovietinvasion")
var ddaylanding = document.getElementById("ddaylanding")

// This is where we add the event listener so when we click the image the text pops up.
// under the event listener I added an if else tag so the text will pop up or go away 
// only when I clicked the image. I used a .style.dysplay so it knows that I am trying 
// to display text. I added an event listener for every single image so the text can pop 
// up or go away by clicking each individual photo. 

hitlerImg.addEventListener("click", function() {

    if (hitlerinfo.style.display === 'none') {
        hitlerinfo.style.display = 'block';
    }
    else {
        hitlerinfo.style.display = 'none';
    }
})

naziImg.addEventListener("click", function(){
    
    if (naziterritory.style.display === 'none'){
        naziterritory.style.display = 'block';
    }
    else {
        naziterritory.style.display = 'none';
    }
})

battleofbritainImg.addEventListener("click", function(){
    
    if (battleofbritain.style.display === 'none'){
        battleofbritain.style.display = 'block';
    }
    else {
        battleofbritain.style.display = 'none';
    }
})

sovietImg.addEventListener("click", function(){
    
    if (sovietinvasion.style.display === 'none'){
        sovietinvasion.style.display = 'block';
    }
    else {
        sovietinvasion.style.display = 'none';
    }
})

DDayImg.addEventListener("click", function(){
    
    if (ddaylanding.style.display === 'none'){
        ddaylanding.style.display = 'block';
    }
    else {
        ddaylanding.style.display = 'none';
    }
})