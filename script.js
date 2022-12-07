let usuario = prompt("Ingrese su nombre de Usuario")
alert("Bienvenido a la Tienda FWC " + usuario)

let productos = []
let total = 0

function add(producto, precio){
    console.log(producto, precio)
    productos.push(producto)
    total = total + precio
    document.getElementById("chango"). innerHTML = `Pagar USD$${total}`
}
function pay() {
    alert(productos.join(", \n"))
}

const camisetas = [
    { nombre: 'Qatar',precio: 100, marca: "nike"},
    { nombre: 'Ecuador', precio: 50, marca: "marathon"},
    { nombre: 'Senegal', precio: 100, marca: "puma"},
    { nombre: 'Holanda', precio: 115, marca: "nike"}
]
let productoFiltrados = camisetas.filter((camiseta) => camiseta.marca === "nike" && camiseta.precio > 100)
console.log(productoFiltrados)