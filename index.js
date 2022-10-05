//Call de nuestro html
const canvas = document.getElementById("canvasid");
const context = canvas.getContext("2d");

//seteamos el width y height del canvas
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

//dibujamos un rectangulo del mismo alto y ancho de nuestro canvas
context.fillStyle = "#000";
context.fillRect(0, 0, w, h);

//para que el texto caiga en columnas
const columns = Math.floor(w / 20) + 1;
const ypos  = Array(columns).fill(0);

//creamos la función 

function matrix(){
    //dibujamos un rectangulo semi-transparente
    context.fillStyle = "#0001";
    context.fillRect(0, 0, w, h);

    // Asignamos el color y tamaño de la fuente
    context.fillStyle = "#ff0000";
    context.font = "15pt monospace";
    
    //creamos un bucle forEach para poner un caracter aleatorio en cada columna
    ypos.forEach((y, index) => {
        //generamos el caracter random
        const randomText = String.fromCharCode(Math.random() * 128);
        
    // Ahora que tenemos y, debemos asignarle a index una variable 
        const x = index * 20;
    
        //renderizamos... 
        context.fillText(randomText, x, y);

    // Ahora, cuando el final de nuestra columna llegue hasta los 100px vamos a resetear la columna persé
        if (y > 100 + Math.random() * 10000) ypos[index] = 0;
        //si no, que solo mueva la coordenada "y" para la columna 20px abajo
        else ypos[index] = y + 20;
    });
    
}

//Llamamos a la función ... 
setInterval(matrix, 50);






/* 
Para conocer un poco mas del context.fillStyle y el fillRect les dejo los siguientes links: 
http://drawingincode.com/lessons/reference/fill_style/index.html
http://drawingincode.com/lessons/reference/fill_rect/index.html




*/