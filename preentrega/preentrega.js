
const productos = [
   {id:1, nombre:"Pack de 5GB", precio:2000},
   {id:2, nombre:"Pack de 10GB", precio:4000},
   {id:3, nombre:"Pack de 15GB", precio:5000},
   {id:4, nombre:"Pack de 3GB X 7 Dias", precio:1500},
]

class Carrito {
   constructor() {
       this.productos = [];
       this.descuento = 20;
       this.maxProductosParaDescuento = 2;
       this.totalPagar = 0;
   }

   agregarProducto(id) {
       let producto = productos.find(prod => prod.id === id);
       console.log(producto);

       if (producto) {
           this.productos.push(producto);
           console.log("Agregaste el Producto #" + id + " al Carrito!");
       } else {
           console.log("No se encontró el Producto con #" + id + "!");
       }
   }

   listarCarrito() {
       let salida = "";

       this.productos.forEach(item => {
           salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
       })

       return salida;
   }

   calcularTotalProductos() {
       return this.productos.length;
   }

   aplicarDescuento() { 
       if (this.calcularTotalProductos() >= this.maxProductosParaDescuento) {
           return Math.round((this.calcularTotalPagar() * this.descuento) / 100);
       } else {
           return 0;
       }
   }

   calcularTotalPagar() {
       let total = 0;

       this.productos.forEach(item => {
          total += item.precio;
       });

       return total;

   }
}

function listarProductos() {
   let salida = "";

   productos.forEach(item => {
       salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
   })

   return salida;
}


const carrito = new Carrito();
let opcionSeleccionada = 10;

while (opcionSeleccionada != 0) {
opcionSeleccionada = parseInt(prompt("Seleccione el producto a agregar al Carrito: (X para Salir)\n Seleccione 5 para continuar \n" + listarProductos()));

   if (opcionSeleccionada == 5) {
       break;
   }

   carrito.agregarProducto(opcionSeleccionada);
}

let productosCarrito = "Detalle:\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calcularTotalPagar();
let salidaDescuento = "Descuento: $" + carrito.aplicarDescuento();
let montoFinal = "Total: $" + Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento());
alert(productosCarrito + "\n" + salidaSubTotal + "\n" + salidaDescuento + "\n" + montoFinal);
