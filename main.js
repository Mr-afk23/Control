import { header } from "./Componentes/header/headerComponent.js";
import { seccion1Component } from "./Componentes/seccion1/seccion1Component.js";
import { navComponent } from "./Componentes/nav/navComponent.js";

function seccion(){

    
    let seccion = document.createElement('seccion');

    //Header 
    seccion.appendChild(header());

    //seccion 
    seccion.appendChild(seccion1Component());

    //nav 
    seccion.appendChild(navComponent());


return seccion;
}

document.body.appendChild(seccion());