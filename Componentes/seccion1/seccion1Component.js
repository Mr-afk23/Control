import { item } from "../modulos/item/itemModulo.js";
export function seccion1Component(){

    let seccion1Component = document.createElement('seccion');
    seccion1Component.className = "seccion1"
    

    seccion1Component.appendChild(item());
      seccion1Component.appendChild(item());
        seccion1Component.appendChild(item());
          seccion1Component.appendChild(item());
    return seccion1Component;

}