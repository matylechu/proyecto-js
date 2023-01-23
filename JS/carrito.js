const pintarCarrito = () => {
    modalcontainer.innerHTML = ""
    modalcontainer.style.display = "flex"
    const modalheader = document.createElement("div")
    modalheader.className = "modal-header"
    modalheader.innerHTML = `
    <h1 class"modal-header-tittle">Este es tu Carrito FWC⚽🏆</h1>
    `
    modalcontainer.append(modalheader)

    const modalbutton = document.createElement("h3")
    modalbutton.innerText = "X"
    modalbutton.className = "modal-header-button"

    modalbutton.addEventListener("click",() =>{
        modalcontainer.style.display = "none"
    })
    
    modalheader.append(modalbutton)

    
    carrito.forEach((product) => {    
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <h2>USD$${product.precio}</h2>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="delete-product"> ❌ </span> 
    `
    modalcontainer.append(carritoContent)

    let eliminar = carritoContent.querySelector(".delete-product")
    eliminar.addEventListener("click", () =>{
    eliminarProducto(product.id)
    })

    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a Pagar: USD$${total}`
    modalcontainer.append(totalBuying) 

    let btnComprar = document.createElement("button")
    btnComprar.innerText = "Finalizar Compra"
    btnComprar.className = "button-finish"

    modalcontainer.append(btnComprar)
    btnComprar.addEventListener("click", () => {
        Swal.fire({
            title: 'Muchas Gracias!!!',
            text: 'Su compra se realizo con exito!',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
    })


}
    verCarrito.addEventListener("click",pintarCarrito)

    const eliminarProducto = (id) => {
        const foundId = carrito.find((element) => element.id === id)
        
        console.log(foundId)
        
        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId
        })
        carritoCounter()
        saveLocal()
        pintarCarrito()
    }

    const carritoCounter = () => {
        cantidadCarrito.style.display = "block"
        const carritoLength = carrito.length
        localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
        cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
     }
     carritoCounter()