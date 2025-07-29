export function item(){

    let item = document.createElement('div');
    
    item.className = "item"

    let titulo = document.createElement("h2")
    titulo.textContent = "Titulo";
    item.appendChild(titulo);

    let img = document.createElement("img")
    img.src = "../assets/Camaro.jpg"
    img.className = "Camaro"
    item.appendChild(img);

    let descripcion = document.createElement("descripcion")
    descripcion.textContent = "El Chevrolet Camaro fue creado por General Motors en 1966 como respuesta directa al éxito del Ford Mustang. Diseñado como un auto deportivo y accesible, debutó en 1967 con opciones de motor V6 y V8. Su estilo agresivo y rendimiento lo convirtieron rápidamente en un ícono de los muscle cars."
    descripcion.className = "historia"
    item.appendChild(descripcion);





    return item;
}