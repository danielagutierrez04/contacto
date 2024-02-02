const Lista_de_contacto = [];
function contacto (id,nombre,apellido,edad,email,telefono,ciudad,dirreccion){

    this.id = id;
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.email = email,
    this.telefono = telefono,
    this.ubicacion = {
        ciudad:ciudad,
        dirreccion:dirreccion,
    }

}

let contacto1 = contacto(0,"daniel","rodriguez",20,"danielrodriguez1@", 3003167002,"cartagena","manzana f lote 23")

 let contacto2 = contacto(1,"camila","martinez",15,"cmartinez@gmail.com", 3045642662,"barranquilla","carrera 4 etapa 2 b")
 
 Lista_de_contacto.push(contacto2)

 let contacto3 = contacto(2,"sebastian","castro",18,"castrosebas@gmail.com", 3003245432,"cali","carrera24 b-3")

 Lista_de_contacto.push(contacto3)

 console.log(Lista_de_contacto)

function crear (){
let contactoNuevo
};

 function eliminarcontacto(){
    let removercontacto = [1];
    Lista_de_contacto.pop(removercontacto)
 }

 eliminarcontacto();
 console.log(Lista_de_contacto)

 function contactoNuevo(nombre, telefonos) {
    nombre = contacto.nombres;
    telefonos = contacto.telefonos;
    Lista_de_contacto.unshift(nombres, telefonos);

 }

 contactoNuevo();
 console.log(Lista_de_contacto);

 let contactoNuevo

 function borrarcontacto(){
    let objeRecorrido;
    let (objeRecorrido in Lista_de_contacto) {
        contactoNuevo.splice(3, 3, objeRecorrido);
    }

    return Lista_de_contacto;
 }
 
 borrarcontacto()
 console.log("elemento borrado: " + contactoNuevo)

 function listadeactualizacion(){
    console.log(Lista_de_contacto);
 }

 listadeactualizacion(contacto);