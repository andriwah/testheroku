import fetch from "node-fetch";

async function getPokemons(){
    try {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=30";
        const response = await fetch(url, {
            method: 'GET'
        })
        if (!response.ok) throw new Error(`Error! status: ${response.status}`)

        const result = await response.json()
        return result 
    } catch (error) {
        console.log("Error!");
    }
}

console.log(await getPokemons());