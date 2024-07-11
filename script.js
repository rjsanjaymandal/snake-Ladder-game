const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const player = document.querySelector(".player");
const currPlayer = document.querySelector(".curr-player");
const dice = document.querySelector(".dice-value")
const mapping = {
    // for snake
    97 : 61,
    91 : 73,
    76 : 54,
    38 : 20,
    51 : 10,

    // for ladder
    64: 83,
    53 : 72,
    5 : 58,
    14 : 49
}

// snake and ladder indexes 
const snakeAndLadderIndexes = Object.keys(mapping).map(index => parseInt(index))

let player1Index = 0
let player2Index = 0
let currPlayerTurn = 1
let firstMove1 = false
let firstMove2 = false

function endGame() {
    console.log("endGame");
    player1Index = 0
    player2Index = 0
    currPlayerTurn = 1

    player1.style.bottom = "40px"
    player1.style.left = "-35px"
    player1.style.top = ""

    player2.style.bottom = "20px"
    player2.style.left = "-35px"
    player2.style.top = ""

}


function play() {
    
    if(currPlayerTurn === 1){

        const random = Math.floor(Math.random() * 6) + 1
        dice.innerHTML = random

        if(random === 1)
            firstMove1 = true

        if(player1Index + random <= 100 && firstMove1){
            player1Index += random

            const boxPosition = document.getElementById(`b${player1Index}`)
            player1.style.top = boxPosition.offsetTop+5 + "px";
            player1.style.left = boxPosition.offsetLeft+10 + "px";
    
            if(snakeAndLadderIndexes.includes(player1Index)){
                setTimeout(() => {       
                    player1Index = mapping[player1Index]
                    const boxPosition = document.getElementById(`b${player1Index}`)
                    player1.style.top = boxPosition.offsetTop+5 + "px";
                    player1.style.left = boxPosition.offsetLeft+10 + "px";
                }, 1000);
            }
        }
    
        


        if(player1Index === 100){
            console.log("Red Wins");
            setTimeout(() => {
                
                alert("Red Wins");
                endGame()
            }, 1000);
            return
        }
        
        currPlayerTurn = 2
        currPlayer.innerHTML = "Green Turn"
        currPlayer.classList.add("activeGreen")
    }
    else{

        const random = Math.floor(Math.random() * 6) + 1
        dice.innerHTML = random

        if(random === 1)
            firstMove2 = true

        if(player2Index + random <= 100 && firstMove2){
            player2Index += random

            const boxPosition = document.getElementById(`b${player2Index}`)
            player2.style.top = boxPosition.offsetTop+5 + "px";
            player2.style.left = boxPosition.offsetLeft+10 + "px";
            
            if(snakeAndLadderIndexes.includes(player2Index)){
                
                setTimeout(() => { 
                    player2Index = mapping[player2Index]
                    const boxPosition = document.getElementById(`b${player2Index}`)
                    player2.style.top = boxPosition.offsetTop+5 + "px";
                    player2.style.left = boxPosition.offsetLeft+10 + "px";
                }, 1000);
            }
        }
        

        if(player2Index === 100){
            console.log("Green Wins");
            setTimeout(() => {
                
                alert("Green Wins");
                endGame()
            }, 1000);
            return
        }

        currPlayerTurn = 1
        currPlayer.innerHTML = "Red Turn"
        currPlayer.classList.remove("activeGreen")
    }
}


dice.addEventListener("click", () => {  
    play()
})
    