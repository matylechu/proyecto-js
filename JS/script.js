let pageContent = document.getElementById("pageContent")
let verCarrito = document.getElementById("chango")
let modalcontainer = document.getElementById("modal-container")
let cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

camisetas.forEach((product)=> {
    let content = document.createElement("div")
    content.className = "product-container"
    content.innerHTML = `
    <h3>${product.nombre}</h3>
    <img src="${product.img}">
    <p>${product.marca}</p>
    <h2>USD$${product.precio}</h2>
    `
    pageContent.append(content)

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar"
    comprar.className = "button-add"

    content.append(comprar)

    comprar.addEventListener("click", () =>{
    
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
        if(repeat){
            carrito.map((prod) => {
                if (prod.id === product.id){
                    prod.cantidad++
                }
            })
        } else {
        carrito.push({
            id: product.id,
            marca: product.marca,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad
        })
          console.log(carrito)
          console.log(carrito.length)
          carritoCounter()
          saveLocal()
        }
    })
})

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

