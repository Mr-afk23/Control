export function item(titulo, urlImg, precio, descripcion) {
    let item = document.createElement("div");
    item.className = "item";

    // Título
    let title = document.createElement("h3");
    title.textContent = titulo;
    item.appendChild(title);

    // Imagen
    let img = document.createElement("img");
    img.src = urlImg;
    img.alt = titulo;
    item.appendChild(img);

    // Precio
    let price = document.createElement("p");
    price.className = "precio";
    price.textContent = `$${precio}`;
    item.appendChild(price);

    // Descripción
    let desc = document.createElement("p");
    desc.className = "descripcion";
    desc.textContent = descripcion;
    item.appendChild(desc);

    // Evento click
    item.addEventListener("click", ()=>{
        item.classList.add("verde");
        let rHeader = document.querySelector(".header");
        rHeader.classList.add("ocultar");
    });

    return item;
}

// (la función colorVerde realmente no hace falta,
// porque ya agregas la clase en el eventListener)
