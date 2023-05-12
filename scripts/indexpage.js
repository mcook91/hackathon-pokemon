class Pokemon {
    constructor(name, type, attacks, backpicture, frontpicture) {
        this.name = name;
        this.type = type;
        this.attacks = attacks;
        this.backpicture = backpicture;
        this.frontpicture = frontpicture;
        this.health = 100;
    }
}


const pokeArray = []
// let bulbasaur = new Pokemon("bulbasaur", "grass", ["razor-wind", "swords-dance", "cut", "bind"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
// let bulbasaurOne = new Pokemon("Charmander", "grass", ["razor-wind", "swords-dance", "cut", "bind"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
// pokeArray.push(bulbasaur)
// pokeArray.push(bulbasaurOne)
//console.log(pokeArray[0])

const url = `https://pokeapi.co/api/v2/pokemon/`;

const pokemenData = (url) => {
    for (let i = 1; i <= 151; i++){
        axios.get(`${url+i}`)
        .then(response => {
            let i = new Pokemon(response.data.name, response.data.types[0].type.name, [response.data.moves[0].move.name, response.data.moves[1].move.name, response.data.moves[2].move.name, response.data.moves[3].move.name], response.data.sprites.back_default, response.data.sprites.front_default)
            pokeArray.push(i)
            optionsPokemon(pokeArray)
            playerOneOptions.innerHTML = optionsPokemon(pokeArray).toString()
            playerTwoOptions.innerHTML = optionsPokemon(pokeArray).toString()
        })
        .catch(error => {
        console.error(error);
        }) 
    }
}

pokemenData(url)

// Adding pokemon to Select Pokemon list 

const playerOneOptions = document.querySelector('#pokemonplayer1')
const playerTwoOptions = document.querySelector('#pokemonplayer2')

const optionsPokemon = array => {
    const newArray = array.map(option => {
        return `<option value="${option.name}">${option.name.charAt(0).toUpperCase() + option.name.substring(1)}</option>`
    })
    return newArray
}




// Creating Pokemon Sections

const battleSectionOne = document.querySelector('.playerOne')
const battleSectionTwo = document.querySelector('.playerTwo')

const pokeCard = (object, player) => {
    return `
        <div>
            <img src="${player === 1 ? object.backpicture : object.frontpicture}" alt="${player === 1 ? `Back of ${object.name}` : `Front of ${object.frontpicture}`}"/>
            <p>${object.health}/100</p>
            <div>
                ${attakOptions(object.attacks)}
            </div>
        </div>
    `
}


const attakOptions = array => {
    const newArray = array.map(option => {
        return `<button class='battle__attack' button'>${option}<button>`
    })
    newString = newArray.join("")
    console.log(newString)
    return newString
}

const form = document.querySelector('form')

form.addEventListener("submit", (e) => { 
    e.preventDefault()
    console.log(e.target.pokemonplayer1.value)
    pokeArray.forEach(pokemon => pokemon.name === e.target.pokemonplayer1.value ? battleSectionOne.innerHTML = pokeCard(pokemon, 1) : 'Not a real pokemon')
    pokeArray.forEach(pokemon => pokemon.name === e.target.pokemonplayer2.value ? battleSectionTwo.innerHTML = pokeCard(pokemon, 2) : 'Not a real pokemon')
})




