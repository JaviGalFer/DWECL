const mm = ["enero","febrero","marzo","abril"];
const zz = ["gfdfgdf","gfdg","margfdfgzo","gdfgdf"];

imprimir_meses_for(mm);
imprimir_meses_for(zz);
imprimir_meses_while(zz);
imprimir_meses_dowhile(mm);


function imprimir_meses_for(kk){
    console.log("for");
    for(let i=0;i<kk.length;i++){
        console.log(kk[i]);
    }

}


function imprimir_meses_while(kk){
    console.log("while");
    let cont = 0;
    while(cont < kk.length){
        console.log(kk[cont]);
        cont++;
    }
}

function imprimir_meses_dowhile(kk){
    console.log("do while");
    let cont = 0;
    do{
    
        console.log(kk[cont]);
        cont++;

    } while(cont < kk.length)

}