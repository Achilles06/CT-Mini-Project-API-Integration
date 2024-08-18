// Fetch Pokémon data by name or ID
function fetchPokemon() {
    const pokemonNameOrId = document.getElementById('pokemonInput').value.trim().toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayPokemon(data))
        .catch(error => {
            document.getElementById('pokemonResult').innerHTML = '<p class="text-danger">Pokémon not found!</p>';
            console.error('Error:', error);
        });
}

// Display Pokémon data on the search page
function displayPokemon(data) {
    const resultDiv = document.getElementById('pokemonResult');
    resultDiv.innerHTML = `
        <div class="card">
            <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
                <h5 class="card-title">${capitalize(data.name)}</h5>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">Type: ${data.types.map(t => t.type.name).join(', ')}</p>
                <a href="details.html?pokemon=${data.name}" class="btn btn-primary">View Details</a>
            </div>
        </div>
    `;
}

// Capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Fetch and display Pokémon details on details page
function fetchPokemonDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemon = urlParams.get('pokemon');
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayPokemonDetails(data))
        .catch(error => console.error('Error:', error));
}

// Display Pokémon details on the details page
function displayPokemonDetails(data) {
    const detailsDiv = document.getElementById('pokemonDetails');
    detailsDiv.innerHTML = `
        <div class="card">
            <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
                <h5 class="card-title">${capitalize(data.name)}</h5>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">Type: ${data.types.map(t => t.type.name).join(', ')}</p>
                <p class="card-text">Abilities: ${data.abilities.map(a => a.ability.name).join(', ')}</p>
                <p class="card-text">Height: ${data.height}</p>
                <p class="card-text">Weight: ${data.weight}</p>
            </div>
        </div>
    `;
}

// Fetch and display Pokémon types
function fetchPokemonTypes() {
    const apiUrl = 'https://pokeapi.co/api/v2/type/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayPokemonTypes(data.results))
        .catch(error => console.error('Error:', error));
}

function displayPokemonTypes(types) {
    const typesContainer = document.getElementById('typesContainer');
    typesContainer.innerHTML = types.map(type => `
        <button class="btn btn-primary m-2" onclick="fetchPokemonsByType('${type.name}')">
            ${capitalize(type.name)}
        </button>
    `).join('');
}

function fetchPokemonsByType(type) {
    const apiUrl = `https://pokeapi.co/api/v2/type/${type}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayPokemonsByType(data.pokemon))
        .catch(error => console.error('Error:', error));
}

function displayPokemonsByType(pokemons) {
    const typesContainer = document.getElementById('typesContainer');
    typesContainer.innerHTML = pokemons.map(poke => `
        <p>${capitalize(poke.pokemon.name)}</p>
    `).join('');
}

// Fetch and display Pokémon abilities
function fetchPokemonAbilities() {
    const apiUrl = 'https://pokeapi.co/api/v2/ability/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayPokemonAbilities(data.results))
        .catch(error => console.error('Error:', error));
}

function displayPokemonAbilities(abilities) {
    const abilitiesContainer = document.getElementById('abilitiesContainer');
    abilitiesContainer.innerHTML = abilities.map(ability => `
        <p>${capitalize(ability.name)}</p>
    `).join('');
}

// Fetch and display Pokémon moves
function fetchPokemonMoves() {
    const apiUrl = 'https://pokeapi.co/api/v2/move/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayPokemonMoves(data.results))
        .catch(error => console.error('Error:', error));
}

function displayPokemonMoves(moves) {
    const movesContainer = document.getElementById('movesContainer');
    movesContainer.innerHTML = moves.map(move => `
        <p>${capitalize(move.name)}</p>
    `).join('');
}

// Fetch and display Pokémon generations
function fetchPokemonGenerations() {
    const apiUrl = 'https://pokeapi.co/api/v2/generation/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayPokemonGenerations(data.results))
        .catch(error => console.error('Error:', error));
}

function displayPokemonGenerations(generations) {
    const generationsContainer = document.getElementById('generationsContainer');
    generationsContainer.innerHTML = generations.map(generation => `
        <p>${capitalize(generation.name)}</p>
    `).join('');
}
