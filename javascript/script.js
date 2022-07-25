const productos =[
    {marca: 'Alphalethe', nombre: 'Kinetic Bra', precio: 49, imagen: src='../img/blackseries1.jpg', categoria:'tops'},
    {marca: 'Alphalethe', nombre: 'Blacked Jacket', precio: 55, imagen: src='../img/blackseries2.jpg', categoria:'jackets'},
    {marca: 'Alphalethe', nombre: 'Perfomance Crop', precio: 40, imagen: src='../img/blackseries3.jpg', categoria:'tops'},
    {marca: 'Alphalethe', nombre: 'Blacked Leggin', precio: 89, imagen: src='../img/blackseries4.jpg', categoria:'leggins'},
    {marca: 'Alphalethe', nombre: 'Infinity Top', precio: 25, imagen: src='../img/blackseries5.jpg', categoria:'tops'},
    {marca: 'Alphalethe', nombre: 'Blue Jacket', precio: 35, imagen: src='../img/sueter1.jpg', categoria:'jackets'},
    {marca: 'Alphalethe', nombre: 'Terry Hoddie', precio: 45, imagen: src='../img/sueter2.jpg', categoria:'jackets'},
    {marca: 'Alphalethe', nombre: 'Infinity Blue ', precio: 79, imagen: src='../img/tops3.jpg', categoria:'tops'},
    
]

const contenedor= document.querySelector('.productos__container')

//botonones filtrado
const btnleg= document.querySelector('.btnLeggins')

console.log(btnleg)
const btnTops= document.querySelector('.btnTop')
const btnAll= document.querySelector('.btnAll')
const btnJackets=document.querySelector('.btnJacket')



//eventos 


btnleg.addEventListener('click', filtrarLeggins)
btnTops.addEventListener('click', filtrarTops)
btnAll.addEventListener('click', mostrarTodos)
btnJackets.addEventListener('click', filtrarJackets)

//eventos pagina producto
// imagenDos.addEventListener('click', cambiarImagen)



mostrarProductos(productos)
function mostrarProductos(productos){
    productos.forEach(producto => {
        const { marca, nombre, precio, imagen } = producto
        //primero crear el div que contiene esos productos 
        const divProducto= document.createElement('div')
        divProducto.classList.add('producto')

        //Falta crear el enlace a la pagina de productos

        // <div class="producto">
        //         <a href="../pages/product.html">
        //             <img src="../img/blackseries3.jpg" alt="">
        //             <div class="producto__descripcion">
        //                 <span>Alphalethe</span>
        //                 <h5>Performance crop</h5>
        //                 <h4>59$</h4>
        //             </div>
        //         </a>
        //     </div>
       

        //IMAGEN DEL PRODUCTO 
        const imagenProducto= document.createElement('img')
        imagenProducto.src=imagen


        //div con el texto del producto
        const divTexto= document.createElement('div')
        divTexto.classList.add('producto__descripcion')

        //span
        const marcaProducto = document.createElement('span')
        marcaProducto.textContent= marca

        // titulo producto

        const tituloProducto= document.createElement('h5')

        tituloProducto.textContent= nombre

        //PRECIO PRODUCTO 
        const precioProducto= document.createElement('h4')
        precioProducto.textContent= `$${precio}`

        //AGREGAR AL HTML 

        
        divProducto.appendChild(imagenProducto)
        divProducto.appendChild(divTexto)
        //agregando los textos al div de texto
        divTexto.appendChild(marcaProducto)
        divTexto.appendChild(tituloProducto)
        divTexto.appendChild(precioProducto)

       

        //agregar el div de producto al contenedor de la pagina

        contenedor.appendChild(divProducto)

        

    });

}


//Hacer filtrado de productos

function limpiarHTML(){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

function filtrarLeggins(){
    limpiarHTML()
    const legginsFiltrados= productos.filter((producto)=> producto.categoria==='leggins')
    mostrarProductos(legginsFiltrados)
}

function filtrarTops(){
    limpiarHTML()
    const topsFiltrados= productos.filter((producto)=> producto.categoria==='tops')
    mostrarProductos(topsFiltrados)
}

function filtrarJackets(){
    limpiarHTML()
    const jacketsFiltradas= productos.filter((producto)=> producto.categoria==='jackets')
    mostrarProductos(jacketsFiltradas)
}


function mostrarTodos(){
    limpiarHTML()
    mostrarProductos(productos)
}

