let changeMode = document.getElementById("changemode")

let lighT = document.getElementById("light")

let loGo = document.getElementById("logo")

let rSetBtn = document.getElementById("reset-btn")

let finGer = document.getElementById("fingeR")

let cliCked = document.getElementById("clicked")

let cliCcked = document.getElementsByClassName("finger-text")

let miniSus = document.getElementById("minuses")

let incrimenTAnywhere = document.getElementById("incanywhere")


const ignore = [rSetBtn, finGer, loGo, lighT, miniSus, cliCked, incrimenTAnywhere];

document.addEventListener("click", (e) => {
    if (ignore.includes(e.target)) {
        return;
    }
});



function lightmode() {

 loGo.src = "sparkel-dark.png"

 rSetBtn.src = "reset-dark.png"
 
 finGer.src = "finger-black.svg"

 var NAME = document.getElementById("changemode")
 
 NAME.className="lightmode"
}

function darkmode() {
 loGo.src = "fluent--sparkle-16-regular (1).png"

 rSetBtn.src = "resetlogo.png"
 
  finGer.src = 
"streamline--one-finger-tap-remix.svg" 
 
 var NAME = document.getElementById("changemode")
 
 NAME.className="lightmod"
}


let countEL = document.getElementById("count-el")

let count = 0


function incrimentAnywhere() {
  count += 1
  countEL.textContent = count
}

function clicked() {
  count += 0
  countEL.textContent = count
}
function minuses() {
  count -= 1
  countEL.textContent = count
}

function lineoNe() {
   countEL.textContent = 0
   count = -1

}