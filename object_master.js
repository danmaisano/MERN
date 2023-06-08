const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );

// console.log (bListPkmn)

const three_pkmn = pokémon.filter( i => i.id % 3 == 0);

// console.log(three_pkmn)

const firepkmn = pokémon.filter(f => f.types.includes("fire"))

// console.log(firepkmn)

const multi_type = pokémon.filter (m => m.types.length > 1)

// console.log(multi_type)

const justnames = pokémon.map(poke => poke.name)

// console.log(justnames)

const just_names_with_poison = pokémon.filter(poison => poison.types.includes("poison")).map(poke=>poke.name)

// console.log(just_names_with_poison)  

const flying = pokémon.filter(flying => flying.types[1] == "flying").map(poke => poke.types[0])

// console.log(flying)

const only_normal = pokémon.filter(p => p.types.includes("normal")).length

// console.log(only_normal)