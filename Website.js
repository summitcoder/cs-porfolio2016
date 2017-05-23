var hitlerImg = document.getElementById("hitlerImg")
var naziImg = document.getElementById("naziImg")
var sovietImg = document.getElementById("sovietImg")
var DDayImg = document.getElementById("DDayImg")
var battleofbritainImg = document.getElementById("battleofbritainImg")
var hitlerinfo = document.getElementById("hitlerinfo")
var naziterritory = document.getElementById("naziterritory")
var battleofbritain = document.getElementById("battleofbritain")
var sovietinvasion = document.getElementById("sovietinvasion")
var ddaylanding = document.getElementById("dday")

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