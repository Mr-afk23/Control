import { item } from "../modulos/item/itemModulo.js";
import { productos } from "../../database/prouctos.js";
export function seccion1Component(){

    let seccion1Component = document.createElement('seccion');
    seccion1Component.className = "seccion1"
    

    productos.forEach(element => {
      seccion1Component.appendChild(item(element.title,element.image , element.description , element.price));
    })

    
    return seccion1Component;

}