
function login() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    if (name && password) {
        document.getElementById("welcome-section").style.display = "none";
        document.getElementById("pokemon-world").style.display = "block";
        loadPokemon();
    } else {
        alert("Please enter both name and password!");
    }
}

function loadPokemon() {
    const pokemonQuotes = [
        "Pika Pika! - Pikachu",
        "Bulba! - Bulbasaur",
        "Char! - Charmander",
        "Squirtle Squirt! - Squirtle",
        "Jiggly! - Jigglypuff",
        "PSY? PSY - Psyduck"
    ];
    const container = document.getElementById("pokemon-container");

    for (let i = 0; i < 6; i++) {
        const div = document.createElement("div");
        div.className = "pokemon";
        div.innerHTML = `
            <img src="pokemon${i + 1}.gif" alt="Pokemon ${i + 1}" width="250">
            <p>${pokemonQuotes[i]}</p>
        `;
        container.appendChild(div);
    }
}
