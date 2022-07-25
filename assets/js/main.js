"use strict"

var h = 0
var m = 0
var s = 0
var time = 1000
var cron;

function Start(){
  cron = setInterval(() => {Timer()}, time);
}


function Close (){
   clearInterval(cron);
   document.querySelector(".timing").innerHTML = `${(h < 10 ? "0" + h : h)}:${(m < 10 ? "0" + m : m)}:${(s < 10 ? "0" + s : s)}`
   h = 0
   m = 0
   s = 0
   document.querySelector(".crononumbers").innerHTML = "00:00:00"
}

function Timer (){
     s++;
if (s == 60) {
    s = 0
    m++

    if(m == 60){
        m = 0

        h++
    }
}

    const TIME = document.querySelector(".crononumbers")
    TIME.innerHTML = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) 
}

var RedButton = document.querySelector(".red-button")
RedButton.addEventListener("click", function Closer(){
    Close()
})
