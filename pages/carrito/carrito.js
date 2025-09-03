import { header } from "../../componentes/header/headerComponent.js";
import { listaCarrito } from "../../componentes/seccionCarrito/listaCarrito.js";

let seccionCarrito = document.createElement('section');

//cargar header
seccionCarrito.appendChild(header());

//cargar lista de compras
seccionCarrito.appendChild(listaCarrito());

document.body.appendChild(seccionCarrito);