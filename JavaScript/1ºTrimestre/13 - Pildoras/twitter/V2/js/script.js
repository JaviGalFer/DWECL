document.addEventListener("DOMContentLoaded", function() {
    const tweetForm = document.getElementById("tweetForm");
    const tweetInput = document.getElementById("tweetInput");
    const tweetList = document.getElementById("tweetList");
    const resetBtn = document.getElementById("resetBtn");
    const errorMessage = document.getElementById("errorMessage");

    tweetForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const tweetText = tweetInput.value.trim();

        if (tweetText !== "") {
            // Agregar tweet al array
            const tweets = JSON.parse(localStorage.getItem("tweets")) || [];
            tweets.push(tweetText);
            localStorage.setItem("tweets", JSON.stringify(tweets));

            // Agregar tweet a la lista HTML
            addTweetToList(tweetText);
            loadTweets(); // Cargar los tweets actualizados

            // Limpiar el input
            tweetInput.value = "";
        } else {
            showMessage("El mensaje no puede ir vacío.");
        }
    });

    resetBtn.addEventListener("click", function() {
        // Vaciar el array
        localStorage.removeItem("tweets");

        // Vaciar la lista HTML
        tweetList.innerHTML = "";

        showMessage("Tweets reseteados correctamente.");
    });

    // Cargar tweets almacenados en localStorage al cargar la página
    loadTweets();

    function addTweetToList(tweetText) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${tweetText}</span>
            <button class="deleteBtn">X</button>
        `;
        tweetList.appendChild(listItem);

        const deleteBtn = listItem.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", function() {
            // Eliminar tweet del array
            const tweets = JSON.parse(localStorage.getItem("tweets")) || [];
            const index = tweets.indexOf(tweetText);
            if (index !== -1) {
                tweets.splice(index, 1);
                localStorage.setItem("tweets", JSON.stringify(tweets));
            }

            // Eliminar tweet de la lista HTML
            listItem.remove();

            // Cargar los tweets actualizados
            loadTweets();
        });
    }

    function loadTweets() {
        const tweets = JSON.parse(localStorage.getItem("tweets")) || [];
        tweetList.innerHTML = ""; // Limpiar la lista antes de cargar
        tweets.forEach(function(tweet) {
            addTweetToList(tweet);
        });
    }

    function showMessage(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = "block";

        setTimeout(function() {
            errorMessage.style.display = "none";
        }, 3000);
    }
});
