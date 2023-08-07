console.table(excursiones);
//si quedo un carro abandonado lo recupero y lo guardo en el array, sino inicializo el array vacio
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let contenedor = document.getElementById("misprods");
let cantidad = document.getElementById('cantidad');
cantidad.innerText = `🛒${carrito.length}`;

//primer renderizado
if (carrito.length != 0) {
    for (const prod of carrito) {
        //agregar fila a la tabla de carrito
        document.getElementById('tablabody').innerHTML += `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
                <td><button class='btn btn-light'>🗑️</button></td>
            </tr>
        `;
    }
    //incrementar el total
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
}



//luxon
const DateTime = luxon.DateTime;
const inicio = DateTime.now();
console.log(inicio.toLocaleString());
console.log(inicio.weekdayLong);
Swal.fire(`Que tengas un hermoso día ${inicio.weekdayLong}`);
console.log(inicio.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS));



function renderizarProductos(excursiones) {
    contenedor.innerHTML = '';
    for (const producto of excursiones) {
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id='btn${producto.id}' class="btn btn-primary align-bottom">Comprar</button>
                </div>
            </div>   
        `;
    }

    //EVENTOS
    excursiones.forEach((producto) => {
        document.getElementById(`btn${producto.id}`).addEventListener('click', () => {
            agregarACarrito(producto);
        });
    });
}

renderizarProductos(excursiones);

function agregarACarrito(prodAAgregar) {
    carrito.push(prodAAgregar);
    cantidad.innerText = `🛒${carrito.length}`;
    console.table(carrito);
    //alert(`Agregaste ${prodAAgregar.nombre} al carrito ! 💪`);

    //con sweetAlert2
    Swal.fire({
        title: 'Fantástico🥳!',
        text: `Agregaste ${prodAAgregar.nombre} al carrito`,
        imageUrl: prodAAgregar.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: prodAAgregar.nombre,
    })

    //agregar fila a la tabla de carrito
    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${prodAAgregar.id}</td>
            <td>${prodAAgregar.nombre}</td>
            <td>${prodAAgregar.precio}</td>
            <td><button class='btn btn-light'>🗑️</button></td>
        </tr>
    `;
    //incrementar el total
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
    //localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


//finalizar compra

let finalizarBtn = document.getElementById('finalizar');

finalizarBtn.onclick = () => {
    Toastify({
        text: "Gracias por tu compra! Recibirás los datos de la reserva en 48hs.",
        duration: 3000,
        gravity: 'top',
        position: 'right',
        close: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        offset: {
            x: 150, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 110 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
    }).showToast();
    //vaciar el carro y la tabla
    carrito = [];
    document.getElementById('tablabody').innerHTML = ''
    cantidad.innerText = `🛒${carrito.length}`;
    document.getElementById('total').innerText = 'Total a pagar $: ';
    localStorage.removeItem('carrito');
    //luxon
    const fin = DateTime.now();
    const Interval = luxon.Interval;
    const tiempoParaComprar = Interval.fromDateTimes(inicio, fin);
    console.log(tiempoParaComprar.length('seconds'));
}


/*SEGUNDA PREENTREGA
console.table(excursiones);
/*let contenedorExcs=document.getElementById('misExc');*/
//funcion para filtrar las excursiones por precio maximo
/*
function filtrarPorPrecio(precioMax){
    const filtrados = excursiones.filter((excursion) => excursion.precio<=precioMax);
    /*console.log(filtrados);
    return filtrados;
}*/
/*prueba de filtro que anda
filtrarPorPrecio(80);
let precioUsuario = parseFloat(prompt("Ingresa el precio máximo a abonar para la excursión 🌄 (0-Salir)"));

while (precioUsuario != 0){
    if(isNaN(precioUsuario)||precioUsuario<0){
        alert("Ingrese un número válido 😵‍💫");
    }else{
        const excFiltrados = filtrarPorPrecio(precioUsuario);
        console.table(excFiltrados);
        /*renderizarExcursiones(excFiltrados);
    } 
    precioUsuario = parseFloat(prompt("Ingresa el precio máximo a abonar para la excursión 🌄(0-Salir)"));
}
*/