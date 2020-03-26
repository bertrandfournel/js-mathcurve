window.onload = () => {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var height = canvas.getAttribute("height");
    var width = canvas.getAttribute("width");
    

    // Création des axes X et Y
    ctx.beginPath();
    ctx.moveTo(width/2 , 0);
    ctx.lineTo(width/2 , height);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0 , height/2);
    ctx.lineTo(width, height/2);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    







    


}