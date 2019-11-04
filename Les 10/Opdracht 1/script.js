function optellen() {

    var number1= parseFloat(prompt ("Geef een nummer")) ;
    var number2= parseFloat(prompt ("Geef nog een nummer")) ;

    document.getElementById("antwoord").innerHTML = (number1 + number2) ;

if(number1 + number2 > 50) {
    groter();
} else {
    kleiner();
}

function kleiner() {
    document.getElementById("resultaat").style.fontSize = "10px" ;
    document.getElementById("resultaat").style.border = "13px dotted red" ;
    document.getElementById("resultaat").style.backgroundColor = "darkred" ;
}

function groter() {
    document.getElementById("resultaat").style.fontSize = "80px" ;
    document.getElementById("resultaat").style.border = "20px dotted blue" ;
    document.getElementById("resultaat").style.backgroundColor = "darkblue" ;
}
}

function aftrekken() {

    var number1= parseFloat(prompt ("Geef een nummer")) ;
    var number2= parseFloat(prompt ("Geef nog een nummer")) ;

    document.getElementById("antwoord").innerHTML = (number1 - number2) ;

if(number1 - number2 > 50) {
    groter();
} else {
    kleiner();
}

function kleiner() {
    document.getElementById("resultaat").style.fontSize = "10px" ;
    document.getElementById("resultaat").style.border = "13px dotted red" ;
    document.getElementById("resultaat").style.backgroundColor = "darkred" ;
}

function groter() {
    document.getElementById("resultaat").style.fontSize = "80px" ;
    document.getElementById("resultaat").style.border = "20px dotted blue" ;
    document.getElementById("resultaat").style.backgroundColor = "darkblue" ;
}
}
function vermenigvuldigen() {

    var number1= parseFloat(prompt ("Geef een nummer")) ;
    var number2= parseFloat(prompt ("Geef nog een nummer")) ;

    document.getElementById("antwoord").innerHTML = (number1 * number2) ;

if(number1 * number2 > 50) {
    groter();
} else {
    kleiner();
}

function kleiner() {
    document.getElementById("resultaat").style.fontSize = "10px" ;
    document.getElementById("resultaat").style.border = "13px dotted red" ;
    document.getElementById("resultaat").style.backgroundColor = "darkred" ;
}

function groter() {
    document.getElementById("resultaat").style.fontSize = "80px" ;
    document.getElementById("resultaat").style.border = "20px dotted blue" ;
    document.getElementById("resultaat").style.backgroundColor = "darkblue" ;
}
}
function delen() {

    var number1= parseFloat(prompt ("Geef een nummer")) ;
    var number2= parseFloat(prompt ("Geef nog een nummer")) ;

    document.getElementById("antwoord").innerHTML = (number1 / number2) ;

if(number1 / number2 > 50) {
    groter();
} else {
    kleiner();
}

function kleiner() {
    document.getElementById("resultaat").style.fontSize = "10px" ;
    document.getElementById("resultaat").style.border = "13px dotted red" ;
    document.getElementById("resultaat").style.backgroundColor = "darkred" ;
}

function groter() {
    document.getElementById("resultaat").style.fontSize = "80px" ;
    document.getElementById("resultaat").style.border = "20px dotted blue" ;
    document.getElementById("resultaat").style.backgroundColor = "darkblue" ;
}
}





