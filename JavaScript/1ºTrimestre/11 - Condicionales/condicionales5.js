const prompt = require("prompt-sync")();

let estudios = prompt("Introduce tus estudios: ").toUpperCase();

if ((estudios=="DAW") || (estudios == "DAW") || (estudios == "ASIR")){
    console.log("Estás cursando unos estudios de grado superior de informática");
}else{
    console.log("No estás cursando estudios de superior de informática");
}

let paro = prompt("Estás en paro?: ").toString().toUpperCase();

if ((paro == "SI") && ((estudios == "DAM") || (estudios == "DAW") )){
    console.log("Tienes derecho a una beca");
}else{
    console.log("No tienes derecho a una beca");
}


