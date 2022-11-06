function Ingreso(nombre){
    alert("Bienvenido");
    nombre =  prompt("Ingrese su nombre");
    let diaActual = new Date();
    let horaActual = diaActual.getHours();
    console.log(horaActual);
    if (horaActual >6 & horaActual <12){
        return  alert("Buenos dias "  + nombre);
    }else if(horaActual >12 & horaActual <19){
        return alert("Buenas Tardes " + nombre);
    } else if(horaActual >=19 & horaActual < 22){
        return  alert("Buenas Noches " + nombre);
    }

} 

const  productos = [{
        nombre: "Antiparras",
        precio: 3000,
    },
    {
        nombre: "Aniparras de Aguas Abiertas",
        precio: 5000
    },
    {
        nombre: "Flotadores para bebes",
        precio: 1500
    }];


    
function mostrarItems(){
    let compra = 0;
    let i = 0;
    let seleccion = "";
    let productosString = "";
     productosString = productos.map((producto)=>{
        i++;
        return productosString = "\n"+ i + " - Producto: " + producto.nombre + "\n" + "Precio: " + producto.precio;
    } )
    do{
       
        seleccion =  prompt( " Selecione lo que desea comprar, S para slir "+  productosString);

        switch(seleccion){
            case "1":
                compra += productos[0].precio;
                break;
            case "2":
                compra += productos[1].precio;
                break;
            case "3":
                compra += productos[2].precio;
                break;
                case "S":
                alert("Procesando su compra...");
                    break;
                default:
                alert("Opcion Invalida.");
        }

            
    } while(seleccion!="S") 
     
    alert(`El valor total de la compra es: ${compra}`);
}
function despedir(){
    alert(`Gracias  vuelva prontos`)
 
}



Ingreso();
mostrarItems();
despedir();