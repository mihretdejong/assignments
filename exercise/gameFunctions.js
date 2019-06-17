function walk(){
    const randomNum = Math.floor(Math.random()*3)
    if(randomNum === 0){
       // Enemy Appears
            //generate random enemy from at least 3 types
            const currentEnemy = generateEnemy()
            console.log (`A wild ${currentEnemy.type} appeared`)
        //Battle loop
        battleLoop(currentEnemy)
    }
}

function Enemy(type, health, ){
    this.type = type
    this.health = health

}

function generateEnemy(){
    const randomNum = Math.floor(Math.random()*3)
    

    if (randomNum === 0){
        return new Enemy("surgar", 25)
        
            
        
    } else if( randomNum ===1 ){
        return new Enemy("spice")
        
    } else { 
        return new Enemy("ever")
    }

}


function battleLoop(enemy){
    while(enemy.health > 0 && player.health > 0){
        const userChoice = ask.keyInSelect(["fight", "run"], "what would you do?:")
        if (userChoice === 0 ){
            const attackPower
        }

    }
}

module.exports = {
    walk:walk
}