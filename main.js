window.onresize = sreen;
window.onload = sreen;

function screen (){
    myWidth = window.innerWidth;

    document.getElementById("size").innerHTML = "Width : " + myWidth;
}