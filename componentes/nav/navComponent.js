import { obtenerProductos } from "../control/miLocalStorange.js";

export function navComponent() {
    let items = document.createElement('div');
    items.className = "items";

    let cuadro1 = document.createElement('div');
    cuadro1.className = "cuadro";
    cuadro1.textContent = "🏠";
    items.appendChild(cuadro1);

    let cuadro2 = document.createElement('div');
    cuadro2.className = "cuadro";
    cuadro2.textContent = "📦";
    items.appendChild(cuadro2);

    let cuadro3 = document.createElement('div');
    cuadro3.className = "cuadro";
    cuadro3.textContent = "❓";
    items.appendChild(cuadro3);

    // Crear enlace del carrito
    let cuadro4 = document.createElement('a');
    cuadro4.href = "../pages/carrito/carrito.html";  // enlace a la página del carrito
    cuadro4.className = "cuadro";
    cuadro4.textContent = "🛒";

    // Crear indicador de cantidad de productos
    let divItem = document.createElement('div');
    divItem.className = "div-item";
    divItem.textContent = obtenerProductos().length;

    // Solo mostrar si hay productos en el carrito
    if (obtenerProductos().length > 0) {
        cuadro4.appendChild(divItem);
    }

    // Agregar al contenedor principal (items)
    items.appendChild(cuadro4);
    return items;
}
