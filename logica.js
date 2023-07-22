console.table(excursiones);
/*let contenedorExcs=document.getElementById('misExc');*/
//funcion para filtrar las excursiones por precio maximo
function filtrarPorPrecio(precioMax){
    const filtrados = excursiones.filter((excursion) => excursion.precio<=precioMax);
    /*console.log(filtrados);*/
    return filtrados;
}
/*prueba de filtro que anda
filtrarPorPrecio(80);*/
let precioUsuario = parseFloat(prompt("Ingresa el precio máximo a abonar para la excursión 🌄 (0-Salir)"));

while (precioUsuario != 0){
    if(isNaN(precioUsuario)||precioUsuario<0){
        alert("Ingrese un número válido 😵‍💫");
    }else{
        const excFiltrados = filtrarPorPrecio(precioUsuario);
        console.table(excFiltrados);
        /*renderizarExcursiones(excFiltrados);*/
    } 
    precioUsuario = parseFloat(prompt("Ingresa el precio máximo a abonar para la excursión 🌄(0-Salir)"));
}

//DOM
/*
function renderizarExcursiones(listaExc){
    for(const excursion of listaExc){
        contenedorExcs.innerHTML += `
        `;
    }
}
*/