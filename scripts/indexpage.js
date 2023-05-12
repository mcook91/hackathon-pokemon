class Pokemon {
    constructor(name, type, attacks, backpicture, frontpicture) {
        this.name = name;
        this.type = type;
        this.attacks = attacks;
        this.backpicture = backpicture;
        this.frontpicture = frontpicture;
        this.health = 100;
        this.link = []
    }

    addPartner(opponent) {
        this.link.push(opponent)
    }

    attack() {
    // let player1currenthealth = this.health;
    // let player2currenthealth = this.health;
        // random generator for attack values
        function randomNum(max, min){
        // generate a random number

        // min not required
        if(min === undefined || min === '' || min === null){
            // min default value
            min = 0;
        }

        // random number, yay
        return Math.floor(Math.random() * (max - min) + min);
        };

        return this.link[0].health -= randomNum(25, 10);
    }
}

const pokeArray = []
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

const pokeCard = (object, player, playername) => {
    return `
        <div class="pokemon">
            <h2 class="pokemon__name">${playername}</h2>
            <img class="pokemon__pic" src="${player === 1 ? object.backpicture : object.frontpicture}" alt="${player === 1 ? `Back of ${object.name}` : `Front of ${object.frontpicture}`}"/>
            <p class="pokemon__health">${object.health}/100</p>
            <div class="pokemon__attacks">
                ${attakOptions(object.attacks, player)}
            </div>
        </div>
    `
}

const attakOptions = (array, player) => {
    const newArray = []
    array.forEach(option => {
        newArray.push(`<button class='battle__attack battle__attack--${player}' button'>${option}</button>`)
})
    newString = newArray.join("")
    return newString
}

const form = document.querySelector('form')

let playerOnePokemone;
let playerTwoPokemone;

let player1name;
let player2name;

form.addEventListener("submit", (e) => { 
    e.preventDefault()
    console.log(e.target.pokemonplayer1.value)
    pokeArray.forEach(pokemon => { 
        if (pokemon.name === e.target.pokemonplayer1.value) {
            player1name = e.target.player1.value
            battleSectionOne.innerHTML = pokeCard(pokemon, 1, player1name)
            playerOnePokemone = pokemon
        } else {'Not a real pokemon'}})
    pokeArray.forEach(pokemon => { 
        if (pokemon.name === e.target.pokemonplayer2.value) {
            player2name = e.target.player2.value
            battleSectionTwo.innerHTML = pokeCard(pokemon, 2, player2name)
            playerTwoPokemone = pokemon
        } else {'Not a real pokemon'}})
    playerOnePokemone.addPartner(playerTwoPokemone)
    playerTwoPokemone.addPartner(playerOnePokemone)
    console.log(playerOnePokemone.link)
    
})


// attack stuff

const battleSection = document.querySelector(".battle");
const footerSection = document.querySelector(".attackimage");

battleSection.addEventListener("click", (event) => {
    const targetElement = event.target;
    console.log(targetElement)
    if (targetElement.matches('.battle__attack--1')) {
        playerOnePokemone.attack()
        console.log(playerTwoPokemone.health)
        const apiKey = 'SKpc-ZxlFfkJZD-D66E0ULsLY5FQrUNW7y6R5Mo0tTQ';
        const urlSplash = `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=`;
        axios.get(urlSplash+playerOnePokemone.type)
        .then(response => {
            footerSection.innerHTML = `
                <div>
                    <img src=${response.data.urls.raw} alt='' height=200 width=200/>
                </div>
                `;
            console.log(battleSectionOne)
            console.log(battleSectionOne.innerHTML)
            setTimeout(() => {
                footerSection.innerHTML = ''
                battleSectionTwo.innerHTML = pokeCard(playerTwoPokemone, 2, player2name)
            }, 3000)
        })
        .catch(error => {
          console.error(error);
        });
        if (playerTwoPokemone.health <= 0) {
            window.alert('Player 1 Wins!!!')
        }
    }
    if (targetElement.matches('.battle__attack--2')) {
        playerTwoPokemone.attack()
        console.log(playerOnePokemone.health)
        const apiKey = 'SKpc-ZxlFfkJZD-D66E0ULsLY5FQrUNW7y6R5Mo0tTQ';
        const urlSplash = `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=`;
        
        axios.get(urlSplash+playerTwoPokemone.type)
        .then(response => {
            footerSection.innerHTML = `
                <div>
                    <img src=${response.data.urls.raw} alt='' height=200 width=200/>
                </div>
                `;
            console.log(battleSectionOne)
            console.log(battleSectionOne.innerHTML)
            setTimeout(() => {
                footerSection.innerHTML = ''
                battleSectionOne.innerHTML = pokeCard(playerOnePokemone, 1, player1name)
            }, 3000)
        })
        .catch(error => {
          console.error(error);
        });
        if (playerOnePokemone.health <= 0) {
            window.alert('Player 2 Wins!!!')
        }
    }})

    

// RESET button
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener('click', () => {
    location.reload();
});