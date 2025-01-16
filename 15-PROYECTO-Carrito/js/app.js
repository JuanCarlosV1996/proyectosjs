//vARIABLES
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();

function cargarEventListeners () {
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
}

// LEE EL CONTENIDO DEL HTML AL QUE LE DIMO CLICK Y EXTRAE LA INFORMACIÓN DEL CURSO
function leerDatosCurso(curso) {
    console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCruso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoCruso);
}