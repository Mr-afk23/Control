import { header } from "./componentes/header/headerComponent.js";
import { seccion1Component } from "./componentes/seccion1/seccion1Component.js";
import { navComponent } from "./componentes/nav/navComponent.js";


let listaDeCompras = localStorage.getItem("carrito")


function seccion(){

    
    let seccion = document.createElement('seccion');

    if (!listaDeCompras) {
        listaDeCompras = [];
        localStorage.setItem("carrito", JSON.stringify(listaDeCompras));
    }
    console.log(listaDeCompras);

    //Header 
    seccion.appendChild(header());

    //seccion 
    seccion.appendChild(seccion1Component());

    //nav 
    seccion.appendChild(navComponent());


return seccion;
}

document.body.appendChild(seccion());

export { listaDeCompras};