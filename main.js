import { header } from "./Componentes/header/headerComponent.js";
import { seccion1Component } from "./Componentes/seccion1/seccion1Component.js";

function seccion(){

    
    let seccion = document.createElement('seccion');

    //Header 
    seccion.appendChild(header());

    //seccion 
    seccion.appendChild(seccion1Component());



return seccion;
}

document.body.appendChild(seccion());