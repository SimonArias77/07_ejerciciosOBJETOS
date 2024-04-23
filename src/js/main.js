// EJERCICIOS MANEJO DE OBJETOS 

// #1 CREA UN OBJETO LLAMADO PERSONA CON PROPIEDADES COMO NOMBRE, EDAD, CIUDAD.

let persona = {
    nombre: "name",
    edad: "age",
    ciudad: "city"
    }

 // #2 AGREGA UNA PROPIEDAD ADICIONAL AL OBJETO PERSONA QUE REPRESENTA SU OCUPACIÒN.
 
 persona.ocupacion = "ocupation"

 // #3 ACCEDE A UNA PROPIEDAD DEL OBJETO PERSONA Y MUESTRA SU VALOR EN LA CONSOLA.

 console.log(persona.nombre)

 // #4 CREA OTRO OBJETO LLAMADO LIBRO CON PROPIEDADES COMO TÌTULO, AUTOR, AÑO DE PUBLICACIÒN.
 
 let libro = {
    titulo: "Del amor y otros demonios",
    autor: "Gabriel Garcìa Marquez",
    año: "2004"
 }

 // #5 COMBINA LAS PROPIEDADES DE LOS OBJETOS PERSONA Y LIBRO EN UN NUEVO OBJETO LLAMADO INFORMACIÒN.

 let informacion = {...persona, ...libro}
 console.log(informacion)

 // #6 CAMBIA EL VALOR DE UNA PROPIEDAD EN EL OBJETO PERSONA.

 persona.edad = "edad"

 console.log(persona.edad)

 // #7  ELIMINA UNA PROPIEDAD  DEL OBJETO LIBRO

 delete libro.autor
 console.log(libro);

 // #8 CREA UN OBJETO LLAMADO COCHE CON PROPIEDADES COMO MODELO, MARCA Y AÑO.
 
 let coche = {
    modelo: "golf",
    marca: "volkswagen",
    año: "2019"
 }

 // #9 MUESTRA  TODAS LAS PROPIEDADES DEL OBJETO COCHE EN LA CONSOLA.

 console.log(coche)

// #10 AGREGA UN MÈTODO AL OBJETO COCHE QUE IMPRIMA UN MENSAJE EN LA CONSOLA

coche.saludar= function(){
    console.log("hola");
}

coche.saludar();