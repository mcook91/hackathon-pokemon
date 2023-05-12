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
let bulbasaur = new Pokemon("bulbasaur", "grass", ["razor-wind", "swords-dance", "cut", "bind"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
let bulbasaurOne = new Pokemon("Charmander", "grass", ["razor-wind", "swords-dance", "cut", "bind"], "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
pokeArray.push(bulbasaur)
pokeArray.push(bulbasaurOne)
//console.log(pokeArray[0])


const playerOneOptions = document.querySelector('#pokemonplayer1')
const playerTwoOptions = document.querySelector('#pokemonplayer2')

const optionsPokemon = array => {
    const newArray = array.map(option => {
        return `<option value="${option.name}">${option.name.charAt(0).toUpperCase() + option.name.substring(1)}</option>`
    })
    return newArray
}


console.log(optionsPokemon(pokeArray))
playerOneOptions.innerHTML = optionsPokemon(pokeArray).toString()




