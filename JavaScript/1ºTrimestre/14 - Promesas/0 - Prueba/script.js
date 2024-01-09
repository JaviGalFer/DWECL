const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
    .then((datos) => datos.json())
    .then((resultado) => displayJSON(resultado))
    .catch((error) => console.log(`Super error: ` + error));

    function displayJSON(posts){
        console.log(posts);
    }

    console.log("segundo");

    async function obtenerPosts(){
        console.log("Dentro del asyn await");
        const datos = await fetch(URL);
        const datosJSON = await datos.json();
        displayJSON(datosJSON);
    }

    obtenerPosts();