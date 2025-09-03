import { guardarProducto , obtenerProductos } from "../../control/miLocalStorange.js";
import { listaDeCompras } from "../../../main.js";

export function item(id, titulo, urlImg, descripcion, precio) {
    let item = document.createElement('div');
    item.className = "item";

    // Título
    let h3 = document.createElement('h3');
    h3.textContent = titulo;
    item.appendChild(h3);

    // Imagen
    let img = document.createElement('img');
    img.src = urlImg;
    img.alt = titulo;
    item.appendChild(img);

    // Descripción
    let p = document.createElement('p');
    p.textContent = descripcion;
    item.appendChild(p);

    // Precio
    let span = document.createElement('span');
    span.textContent = "$" + precio;
    item.appendChild(span);

    // Evento click
    item.addEventListener('click', () => {
        let carritoLocalStorange = obtenerProductos();
        console.log("carrito: ", carritoLocalStorange);

        carritoLocalStorange.push({
            id: id,
            precio: precio,
            nombre: titulo,
            img: urlImg
        });

        guardarProducto(carritoLocalStorange);
        console.log("Producto en LocalStorange");
        location.reload();
    });

    return item;
}
