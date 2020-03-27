window.onload = () => {

    var a = 'hello'
    function retour(){
       console.log(a) 
    }
    
    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var height = canvas.getAttribute("height");
    var width = canvas.getAttribute("width");
    var steps = 20;
    
    
    var btn = document.getElementById("btn");
    

    
    

    // Création des axes X et Y
    // Axe X
    ctx.beginPath();
    ctx.moveTo(0 , height/2);
    ctx.lineTo(width, height/2);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    //Axe Y
    ctx.beginPath();
    ctx.moveTo(width/2 , 0);
    ctx.lineTo(width/2 , height);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    

    //Création de la grille
    //Axe X
    for(let i = 0; i < (width); i += ((width) / (steps))){
        ctx.beginPath();
        ctx.moveTo(i , 0);
        ctx.lineTo(i, height);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }
    //Axe Y
    for(let i = 0; i < (height); i += ((height) / (steps))){
        ctx.beginPath();
        ctx.moveTo(0 , i);
        ctx.lineTo(width, i);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }

    

    // Ceci est la fonction qui dessine la courbe, elle n'est pas terminée
    function draw(formula){
        for (let i = 0; i <= width; i++) {
            var obj = new Formula(formula);
            var result = obj.evaluate({x: (i - (width/2))});
            ctx.fillStyle = 'red';
            ctx.fillRect(i,result,2,2);
            console.log(i)
        }
    }
    
    // Ici l'écouteur d'évènement du bouton "Dessiner"
    var btn = document.getElementById("dessiner");
    btn.onclick = () => {
        var text = document.general.formula.value;
        draw(text);
    }

    

    
    

    
    
    
    
    

    
    
    

}

