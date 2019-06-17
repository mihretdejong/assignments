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
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0){
        const myEnemy = generateEnemy()
        console.log (`Wohooo! your friendly enemy ${myEnemy.type} is poking at you! What will you do?`)
        battleLoop(myEnemy)
        if (player.inventory.length > 3 || player.health <= 0 ){
            gameOver = true
        }
    } else if(randomNum === 1){
        console.log(`Enjoy your time with your loved ones dear ${player.name}! 
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
        console.log(`You might need meditate on God's word and sharpen your 
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


function Enemy(type, health, ammunition, weapon){
    this.type = type
    this.health = health
    this.ammunition = ammunition
    this.weapon = weapon
    this.enemyAttack = function(){

    }
}


function generateEnemy(){
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0){
        return new Enemy("self", 50, 10, "selweapon")
    } else if (randomNum === 1){
        return new Enemy ("materializm", 30, 20, "matWeapon")
    } else {
        return new Enemy("lucifer", 20, 20, "lucWeapon")
    }
}




function battleLoop(enemy){
    console.log("The enemy is glaring, what will you do?")
    while(enemy.health > 0 && player.health > 0){
        const userChoice = ask.keyIn(["fight", "run","chill with the enemy"], "Decisions, decisions, what will you do?: Press [f] to fight and press [r] to run. Press [c] to chill with your enemy. Press [s] to step out.", {limit: "frcs"})
        console.clear()
        
        if (userChoice === "f"){
            const attackPower = player.attack()
            enemy.health -= attackPower
            console.log(`${player.name} attacked ${enemy.type} for ${attackPower}!`)
            player.health -= enemy.ammunition
            console.log(`You were attacked by ${enemy.type} for ${enemy.ammunition}, your health is now ${player.health}`)

            if (enemy.health <= 0){
                player.inventory.push(enemy.weapon)
                console.log(`Congrats! you won ${enemy.weapon}. Your inventory now has ${player.inventory}.
                Enjoy a bit of peace until your enemy ambushes you once again!`)

                break
            }

            
           
            console.log(enemy)
            // console.log(player)
           
            
        } else if (userChoice === "r"){
            
            console.log("you can't run forever! You gotta face your friendly enemy wink wink :)")
            const didEscape = run()
            if (didEscape){
                break
            }
        
            
        } else if (userChoice === "c"){
            console.log("your friendly enemy is a canibal. watch out!")
            console.clear()

        } else if (userChoice === "s"){
            console.log ("haha nice try! Joke! there is no quitting!")
        }
    }
}


function give(){
        const userGift = ask.keyInSelect(["love", "time", "help", "listening ears", "forgiveness"])  
        if (userGift === 0){
           player.health = player.health + 10
           console.log(player.health)     
            console.log("A giving heart is always full and healthy. What would you like to give today?:")
        }

    

}

function animation(){
    

}






//////////////////////////////
// Game

console.log("Hello Player! Welcome!")
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


]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]  ]]]]]]]]]]]]]]]]  ]]]]]]]]  ]]]]]]]]]]]       ]]]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]  ]]]]]]]]]]]]]]]]  ]]]]]]]     ]]]]]]]]] ]]]]]  ]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]  ]]]]]]]]] ]]]]]]  ]]]]]] ]]]] ]]]]]]]]] ]]]]]  ]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]   ]]]]]]  ]]]]]]  ]]]]]]  ]]]]  ]]]]]]]]      ]]]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]]   ]]]]]   ]]]]   ]]]]]           ]]]]]]  ]]]   ]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]]]]  ]]]  ]]  ]]  ]]]]]    ]]]]]]]  ]]]]]  ]]]]]]  ]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]]]]]    ]]]]]    ]]]]]   ]]]]]]]]]]  ]]]]   ]]]]]]]  ]]]]]]]]]]]]]]]]
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

<3<3<3     <3<3<3<3
<3<3<3<3<3  <3<3<3<3<3<3 
  <3<3<3<3<3<3<3<3<3<3
    <3<3<3<3<3<3<3<3
       <3<3<3<3<3
         <3<3<3
           <3

    
    
    
    
    
    
    `
)
player.name = ask.question("May I have your name?:")
console.log(`Thank you ${player.name}`)
console.clear()

while(!gameOver){
    const userAnswer = ask.keyIn(["walk", "charity","print"], "It's a beautiful day, what would you like to do?: Press [w] to walk and press on. Press [c] for charity to earn health points. Press [p] to see your stats. Press [q] to quit the game. ", {limit: "wcpq"})

    console.clear()
    if (userAnswer === "w"){
       
        console.log ("be watchful and pray.")
        walk()
        
    } else if(userAnswer === "c"){
        console.log("Giving is the best gift that keeps giving")
        give()
        
    } else if (userAnswer === "p"){
        console.log (player)
        
    } else if (userAnswer === "q"){
       console.log("haha! nice try! Gotta win or die to get out buddy!")

    }
}

console.log("You're Dead! Try harder next time!")


//we keep getting out of the battle without anybody dying
//how to clear after each command(the previous console logs)
// the enemy keeps appearing again and again. write a conditon if 
// enemy dies, can't come back to life 

// game should end without the player dying