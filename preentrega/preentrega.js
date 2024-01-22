//simulador de linea telefonica

let savedNUMERO = "2121"
let ingresar = false

//login
for (let i = 2; i >= 0; i--) {
   let userNUMERO = prompt("ingresa tu numero de linea. Tenes " + (i + 1) + " intentos")
   if (userNUMERO == savedNUMERO) {
      alert("Login Exitoso");
      ingresar = true;
      break
   } else {
      alert("El numero no coincide. Te quedan " + i + " intentos")
   }
}



if (ingresar) {
   let GB = 15
   let DEUDA = 15000
   let opcion = prompt("Elegi una opcion: \n1-Saldo Disponible \n2-Recargar \n3-Pagar Factura \n4- Presiona X para finalizar");
   while (opcion != "X" && opcion != "x") {
      switch (opcion) {
         case "1": alert("Tu saldo es de GB" + GB)
            break
         case "2": Recargar()
            break
         case "3": alert("Su deuda actual es de $" + DEUDA)
            let opcion = prompt("Con que medio de pago abona: \n1- Mercado Pago \n2- Efectivo \n3- Volver al menu anterior ")
            switch (opcion) {
               case "1": alert("Ingrese manualmente la factura numero: 00023232255")
                  break;
               case "2": alert("Dirijase a un Pago Facil con el numero de factura 00023232255")
                  break;
                  case "3": window.history.back()
            
         }
      }
      opcion = prompt("Elegi una opcion: \n1-Saldo Disponible \n2-Recargar \n3-Pagar \n4- Presiona X para finalizar")
   }

   function Recargar() {
      let recargar = parseInt(prompt("Ingresa la cantidad a recargar"))
      if (recargar > 0) {
         GB += recargar
         alert("Tu saldo actual es de GB" + GB)
      }
   }
  
}

