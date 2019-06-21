const ask = require('readline-sync')

//////////////////////////////////////
// Global Variables
const player = {
    name: "",
    health: 100,
    inventory: [],
    attack: function(){
        return Math.floor(Math.random() * 100)
    }
}
let gameOver = false
///////////////////////////////////////
// Game Functions
function walk(){
    console.clear()
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0){
        const myEnemy = generateEnemy(player.inventory)
        // the function generateEnemy was declared in the battleLoop with an array for a parameter, it will expect an array
        // in this case, it is the inventory that has the array of weapons
        // console.log (`Wohooo! your friendly enemy ${myEnemy.type} is poking at you! What will you do?`)
        battleLoop(myEnemy)

        if (player.inventory.length === 3 || player.health <= 0 ){
            gameOver = true
            console.log(`Well Done ${player.name}! You made it out alive and well! `)
        }
    } else if(randomNum === 1){
        console.log(`Enjoy your time with your loved ones ${player.name}! 
        Shower them with love!

                                     <3<3<3     <3<3<3<3
                                   <3<3<3<3<3  <3<3<3<3<3<3 
                                     <3<3<3<3<3<3<3<3<3<3
                                       <3<3<3<3<3<3<3<3
                                          <3<3<3<3<3
                                            <3<3<3
                                              <3
        
        `)
    } else if( randomNum === 2){
        console.log(`You might need to meditate on God's word and sharpen your 
        weapon against the enemy. Fill yourself with God's love!`)
    }       
}

function run(){
    const randomNum = Math.floor(Math.random() * 2)
    if (randomNum === 0){
        console.log(`Arrr, your enemy is unrelenting! He's coming after you!`)
        return false
    } else {
        console.log(`You got lucky this time! Watch out!`)
        return true 
    }
}

const enemyArr = []
function Enemy(type, health, ammunition, weapon){
    this.type = type
    this.health = health
    this.ammunition = ammunition
    this.weapon = weapon
}

function generateEnemy(arr){
    //remove option if array contains it
    // we used recursive function (calling a function inside the function)
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0 ){
        if (arr.indexOf("self destruction button") !== -1 ){
           return generateEnemy(arr)
        } else {
            return new Enemy("yourself", 50, 10, "self destruction button")  
        }
    } else if (randomNum === 1 ){
        if (arr.indexOf("Money") !== -1 ){
            return generateEnemy(arr)
        } else {
            return new Enemy ("world", 30, 20, "Money")
        }
    } else if (randomNum === 2 ){ 
        if (arr.indexOf("Lies") !== -1 ){
            return generateEnemy(arr)
        } else {
        return new Enemy("lucifer", 20, 20, "Lies")
        }
    }
}

// ["fight", "run","chill with the enemy","quit"]
function battleLoop(enemy){
    while(enemy.health > 0 && player.health > 0){
        const userChoice = ask.keyIn(`"Your enemy is blocking your path! Decisions, decisions, what will you do?: Press [f] to fight and press [r] to run. Press [c] to chill with your enemy. Press [q] to bounce out."`, {limit: "frcq"})
        // const myEnemy = generateEnemy()
        console.clear()
        if (userChoice === "f"){
            const attackPower = player.attack()
            enemy.health -= attackPower
            console.log(`${player.name} attacked ${enemy.type} for ${attackPower}!`)
            player.health -= enemy.ammunition
            console.log(`You were attacked by ${enemy.type} for ${enemy.ammunition}, your health is now ${player.health}`)

            if (enemy.health <= 0){
                player.inventory.push(enemy.weapon)
                console.log(`${player.name} , you won ${enemy.weapon}. Your inventory now has ${player.inventory}.
                Enjoy a bit of peace until your enemy ambushes you once again!`)
                break
            }
            console.log(enemy)
            // console.log(player) 
        } else if (userChoice === "r"){
            
            console.log("you can't run forever! You gotta face your friendly enemy! wink wink :)")
            const didEscape = run()
            if (didEscape){
                break
            } 
        } else if (userChoice === "c"){
            console.log("Gobble gobble! your enemy ate your arm and leg! What did you expect?!! \n your friendly enemy is not so friendly! He's a preditor! watch out!")

            console.clear()
        } else if (userChoice === "quit"){
            console.log ("haha nice try! Joke! there is no quitting! Go back and Fight or lace up your shoe and RUN!!!")
        }
    }
}

//["love", "time", "help", "listening ears", "forgiveness"]
function give(){
        const userGift = ask.keyIn("What would you like to give today?: Press [l] for love or Press [t] to give your time or [f] freely grant forgiveness.", {limit: "ltf"}  )  
        if (userGift === "l"){
           player.health = player.health + 20
           console.log(`Great choice ${player.health}! your health is the best it's ever been! Love heals!`)     
        } else if(userGift === "t"){
            player.health = player.health + 10
            console.log(`Well done ${player.health}! giving your time is one of the most sacrificial things you can do for your loved ones`)
        } else if (userGift === "f"){
            player.health = player.health + 10
            console.log(`${player.health} what a beautiful thing forgiveness is! You're healing your heart when you let go and forgive.`)
        }
} 

//////////////////////////////
// Game


console.log(
                    `
                                      //                //
                                    ////               ////
                                  //////             ///////
                                //////////        ////////////
                              ///////////////////////////////
                            ////////////////////////////////////
                            /////////////////////////////////////
                         ///////////     ////////       /////////////
                        /////////  ///// //////// ////// /////////////
                        ////////////////////////////////////////////////
                      //////////////////  ////   ////////////////////////
                      ///////////////////////////////////////////////////
                      /////////////   ///////////// /////////////////////
                        ////////////   ////////  //////////////////////
                          /////////////        //////////////////////
                            ////////////////////////////////////
                             ///////////////////////////////
             ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
          ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
             ]]]]]]]]  ]]]]]]]]]]]]]]]]  ]]]]]]]]  ]]]]]]]]]]]       ]]]]]]]]]]]]]]]]]]]]]]]
          ]]]]]]]]]]]  ]]]]]]]]]]]]]]]  ]]]]]]]     ]]]]]]]]] ]]]]]  ]]]]]]]]]]]]]]]]]]]]]
          ]]]]]]]]]]]  ]]]]]]]]] ]]]]]]  ]]]]]] ]]]] ]]]]]]]]] ]]]]]  ]]]]]]]]]  ]]]]]]]]]]
            ]]]]]]]]]   ]]]]]]  ]]]]]]  ]]]]]]  ]]]]  ]]]]]]]]      ]]]]]]]]]]]]]]]]]]]]]]
          ]]]]]]]]]]]]   ]]]]]   ]]]]   ]]]]]           ]]]]]]  ]]]   ]]]]]]]]]]]]]]]]]]]]
          ]]]]]]]]]]]]]]  ]]]  ]]  ]]  ]]]]]    ]]]]]]]  ]]]]]  ]]]]]]  ]]]]]]]]]]]]]]]]]]]
          ]]]]]]]]]]]]]]]    ]]]]]    ]]]]]   ]]]]]]]]]]  ]]]]   ]]]]]]]  ]]]]]]]]]]]]]]]]
           ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
          ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
             ]]]]    ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]    ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
          ]]]]]]]]]]]]]]]]]]]]]]]]]]]]] ]]]]]]]]]]]]]]]]]]]]]]]]]]]    ]]]]]]]]]]]]]]]
              ]]]]]]]]]]]]]]]]]]]]]]]]]    ]]]]]]]]]]  ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
          ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   
       `
)

console.log("Hello friend! Welcome to life! \n    \n The war is ON! \n")

player.name = ask.question("May I have your name?:")
console.log(`Thank you ${player.name}`)
console.clear()
while(!gameOver){
    const userAnswer = ask.keyIn("It's a beautiful day, what would you like to do?: Press [w] to walk and press on. Press [c] for charity to earn points. Press [p] to print your stats. Press [q] to quit the game. ", {limit: "wcpq"})
    console.clear()
    
    if (userAnswer === "w"){
        console.log ("be watchful and pray.")
        console.clear()
        walk() 
     
    } else if(userAnswer === "c"){
        console.log("Giving is the best gift that keeps giving")
        give()    
    } else if (userAnswer === "p"){
        console.log (player)  
    } else if (userAnswer === "q"){
       console.log("haha! nice try! Gotta win or die friend!")
    }

}



//console.log("You're Dead! Try harder next time!")
//we keep getting out of the battle without anybody dying
//how to clear after each command(the previous console logs)
// the enemy keeps appearing again and again. write a conditon if 
// enemy dies, can't come back to life 

// game should end without the player dying