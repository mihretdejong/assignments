
const ask = require('readline-sync') // readline
const {walk, battleLoop} = require ("./gameFunctions")
//////////
//Global varaibles

const player ={
    name: "",
    health: 100,
    attack: function(){
        return Math.floor(Math.random()*3)
    }
}




let gameOver = false


/////////////////////////
//Game function

// function walk(){
//     const randomNum = Math.floor(Math.random()*3)
//     if(randomNum === 0){
//        // Enemy Appears
//             //generate random enemy from at least 3 types
//             const currentEnemy = generateEnemy()
//             console.log (`A wild ${currentEnemy.type} appeared`)
//         //Battle loop
//         battleLoop(currentEnemy)
//     }
// }

// function Enemy(type, health, ){
//     this.type = type
//     this.health = health

// }

// function generateEnemy(){
//     const randomNum = Math.floor(Math.random()*3)
    

//     if (randomNum === 0){
//         return new Enemy("surgar", 25)
        
            
        
//     } else if( randomNum ===1 ){
//         return new Enemy("spice")
        
//     } else { 
//         return new Enemy("ever")
//     }

// }


// function battleLoop(enemy){
//     while(enemy.health > 0 && player.health > 0){
//         const userChoice = ask.keyInSelect(["fight", "run"], "what would you do?:")
//         if (userChoice === 0 ){
//             const attackPower
//         }

//     }
// }





///////////////////////
//Game
console.log("Hello Player!")
player.name = ask.question("May I have your name?")
console.log(`Thank you ${playerName}`)
// go to npm readline to findout about methods

while (!gameOver){
    const userAnswer = ask.keyInSelect(["walk"], "What would you like to do?;")
    if(userAnswer === 0){
        // //create a random number between 0 -2
        const randomNum = Math.floor(Math.random() * 3)
        if (randomNum === 0){
            //encounter an enemy
            walk () // create a function outside of this function and call it here to simplify the code
         } 
    }
}
