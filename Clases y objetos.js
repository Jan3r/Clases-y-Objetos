//Clase padre
class Oviparos{
    // Constructor
    constructor(){
    } 

    Respirar(){
        console.log("Soy capaz de respirar bajo el agua");
    }

    CuidarCrias(){
        console.log("Cuido de mis crias hasta que se valgan por si solas")
    }

}

//Clase Hija
class Tiburon extends Oviparos{
    //Constructor
    constructor(){
        super();
    } 

    nadar(){
        console.log("Soy capaz de nadar");
    }
}

//Clase hija
class Pajaro extends Oviparos{
    //Constructor
    constructor(){
        super();
    }

    Volar(){     
        console.log("Soy capaz de volar")
    }

    Caminar(){     
        console.log("Soy capaz de caminar")
    }

}
console.log("---------------------Objeto ave---------------------------------");
let Pajaro1 = new Pajaro();
Pajaro1.Caminar();
Pajaro1.Volar();
console.log("---------------------Objeto Pez---------------------------------");
//instancia o objeto (pez) de la clase Tiburon
let Pez = new Tiburon();
Pez.Respirar();
Pez.nadar();
Pez.CuidarCrias();
console.log("-------------------------------------------------------------------");
console.log("---------------------Objeto Array Manual---------------------------");
// /instancia o objeto con un array manual
var personas = [
    {
        Nombre:"Fabian",
        edad:32
    },
    {
        Nombre: "Martin",
        edad:18
    }
];

console.log(personas)