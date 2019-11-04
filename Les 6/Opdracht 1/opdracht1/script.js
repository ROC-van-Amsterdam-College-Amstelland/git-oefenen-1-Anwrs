var getal1 = prompt("geef een getal");
var getal2 = prompt("geef een getal");

if (getal1>getal2) {
    document.getElementById("main").style.backgroundColor = "red";
} 

else {
    
if (getal2>getal1) {
    document.getElementById("main").style.backgroundColor = "orange";
}

if (getal1=getal2) {
    document.getElementById("main").style.backgroundColor = "purple";
}
}