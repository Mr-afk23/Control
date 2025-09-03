function header (){

let header = document.createElement('header');
header.className = "header";




//titulo
let titulo = document.createElement('titulo');
header.appendChild(titulo);
titulo.innerText = "Icyrox";
titulo.className = "titulo1";



//div 
let div = document.createElement('div');
header.appendChild(div);
div.className = "div";

let imagen = document.createElement('img');
imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpJTI2xnrxbGNcRWejkbciQcNvuHZPeINjw&s";
div.appendChild(imagen);
imagen.className = "img";







return header;



}

export{header}