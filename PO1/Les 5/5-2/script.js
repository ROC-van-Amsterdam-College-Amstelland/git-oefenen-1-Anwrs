window.onload = function() {

    changeElm();

    function changeElm() {
        var elmValue = "Dit is javascript";
        document.getElementById("myFirstDiv").innerHTML = elmValue;
        document.getElementById("myFirstDiv").style.backgroundColor = "blue";
        document.getElementById("myFirstDiv").style.color = "yellow";
        document.getElementById("myFirstDiv").style.fontSize = "100px";
    }

}