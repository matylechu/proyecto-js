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