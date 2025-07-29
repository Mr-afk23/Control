import { header } from "./Componentes/header/headerComponent.js";
import { seccion1Component } from "./Componentes/seccion1/seccion1Component.js";
function seccion(){

    
    let seccion = document.createElement('seccion');
    seccion.appendChild(header());

    
    seccion.appendChild(seccion1Component());

return seccion;
}

document.body.appendChild(seccion());