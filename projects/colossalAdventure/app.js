
// const player = {
//     health: 20,
//     name: "JJ",
//     inventory: []
// }

// // character creation
// //walking
// //running from a flight
// //fighting
// //enemy creation
// //enemy attacking
// //enemy dying (including dropping an item)
// //character dying

// // ask user for name and give greeting

// function walk(){
//     //ask user to push "w" to walk
//     if (user pushed w){
//         if(1 in 4){
//             fight();
//         } else{
//             // tell user they didn't run into a monster
//             //DO NOT CALL WALK
//         }
//         else {
//             //tell user what's in their inventory, and their health, and tell them to push w to walk
//         }
//     }

// }

// function run(){
//     if(1 in 2){
//         //tell user that they successfully got away and can continue walking//
//         //Do not call walk()
//     } else{
//         //tell user they were not able to run
//         //this part is important, do not call fight(); but you can call the attack functions
//     }

// }

// function fight(){
//     //ask user to either fight or run
//     enemyCreation()
//     if (//user is trying to run){
//         run()
//     } else{
//         attackEnemy
//     }

// }

// function attackEnemy (){

// }

// function enemyAttack(){

// }

// function die(){

// }

// function enemyDie(){

// }

// function enemyCreation(){

// }


const readline = require("readline-sync");
console.log ("Hi gamer! welcome to the rising up in the morning game!")



const gamer = {
    name: "",
    age: 10,
    inventory: [],
}


gamer.name = readline.question("What is your name?")
console.log(`Thank you! ${gamer.name}`)



gamer.inventory.push()
let gameOver = false
let options = ["wake up early","wake up late","take a shower","eat breakfast","play time and go to class!"]
let upEarly = false
let tookShower = false
let eatBfast = false

while(!gameOver){
    const userAnswer = readline.keyInSelect(options, "What would you like to do?:")
    if (userAnswer === 0) {
        console.log("Good morning,early riser! what would you like to do?")
    } else if (userAnswer === -1) {
        console.log("No more snooze, you gotta get up!")
    }
}

//     } else if (userAnswer === 1){
//         console.log ("Good morning, late riser! You're late for class! RUN!!!")
//         gameOver = true
//     } else if (userAnswer === 2){
//         if (upEarly === true){
//             console.log("Enjoy your shower! What would you like to do next?")
//         } else if (upEarly === false){
//             console.log("You woke up late! No shower for you :( Here-use some animal musk like the good old French. Now run to class!")
//             gameOver = true
//         } 

//     } else if (userAnswer === 3){
//         if (upEarly === true && tookShower === true ) {
//             console.log("welcome to hagwarts buffet! You may eat it all or nothing at all! what would you like to do next?")
//         } else if (upEarly === true){
//             console.log ("Ewww, take a shower! Event the Hogwart ghosts can smell you. No breakfast feast")
//         } 

//     } else if (userAnswer === 4){
//         if (upEarly === true && takeShower === true && eatBfast === true){
//             console.log ("You rock! Have a fun day!")
//         } else if (upEarly ===true && takeShower === false && eatBfast ===false){
//             console.log ("come on buddy, gotta take a shower and grab something to eat!")
//         } 
//     } 


// }
