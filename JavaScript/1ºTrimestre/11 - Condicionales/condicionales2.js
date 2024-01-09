const prompt = require("prompt-sync")();



let edad1 = parseInt(prompt	("Introduce la edad de la primera persona: "));
let edad2 = parseInt(prompt	("Introduce la edad de la segunda persona: "));

edad(edad1, edad2);

function edad(edad1,edad2){
    if (edad1 > edad2){
        console.log("La primera persona es mayor que la segunda");
    }else{
        if(edad2 > edad1){
            console.log("La segunda persona es mayor que la primera");
        }else{
            console.log("Tienen la misma edad");
        }
    }
}