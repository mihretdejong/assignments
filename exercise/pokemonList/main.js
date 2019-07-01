const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon")

xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr)
        const pokemonContainer = JSON.parse(xhr.responseText)
        console.log(pokemonContainer)
        const arrayPokemon = pokemonContainer.objects[0].pokemon
        objPokemon(arrayPokemon)

    }
}

function objPokemon(arrayPokemon){
    for (let i = 0; i <arrayPokemon.length; i++){
        const h2 = document.createElement("h2")
        h2.textContent = arrayPokemon[i].name
        document.body.appendChild (h2)
        h2.style.textAlign = "center"
        


    }
    
}


