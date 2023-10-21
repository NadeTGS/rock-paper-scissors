//*---------selector---------*//
// const rockImg = document.getElementById("rock")
// const paperImg = document.getElementById("paper")
// const scissorImg = document.getElementById("scissor")

const selectionArticle = document.querySelector(".selection")
const yourChoiceDiv = document.getElementById("your-choice")
const pcChoiceDiv = document.getElementById("pc-choice")
const messagePar = document.querySelector(".message")
const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainButton = document.getElementById("play-again")

//*---------variables--------*//
let userSelectImage = document.createElement("img")
let pcSelectImage = document.createElement("img")
let pcRandom 

//? colors
const YELLOW = "#ffc538"
const RED = "#fb778b"
const GREEN = "#5ab7ac"
const BLACK = "#121212"
const GREY = "#cbcadad9"

//*----------event listeners-----*//

selectionArticle.addEventListener("click", (e) => {
    if (e.target.id) {
        userSelectImage.src = `./img/${e.target.id}.png`
        userSelectImage.alt = e.target.id
        yourChoiceDiv.appendChild(userSelectImage)
        createPcSelection()
    }
})

playAgainButton.addEventListener("click", () => {
    modalCardSection.classList.toggle("show")
    // modalCardSection.classList.toggle("remove")
    // modalCardSection.style.display = "none"
})

//*--------functions---------*//

const createPcSelection = () => {
    const pcArr = ["rock", "paper", "scissor"]
    pcRandom = pcArr[Math.floor(Math.random() * 3)]
    pcSelectImage.src = `./img/${pcRandom}.png` 
    pcSelectImage.alt = pcRandom
    pcChoiceDiv.appendChild(pcSelectImage)
    calculateResult()
}
const calculateResult = () => {
    if(userSelectImage.alt === pcSelectImage.alt) {
        draw()
    }else{
        if(userSelectImage.alt === "rock") {
            pcRandom === "paper" ? youLost() : youWin()
        }else if(userSelectImage.alt === "scissor") {
            pcRandom === "rock" ? youLost() : youWin()
        }else if(userSelectImage.alt === "paper") {
            pcRandom === "scissor" ? youLost() : youWin()
        }
    }
    if(pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
        openModal()
    }

}
const draw = () => {
    messagePar.textContent = "Its a draw"
    scoreCardSection.style.color = YELLOW
    messagePar.style.backgroundColor = YELLOW
}

const youLost = () => {
    messagePar.textContent = "You Lost"
    scoreCardSection.style.color = RED
    messagePar.style.backgroundColor = RED
    pcScoreSpan.textContent++

}
const youWin = () => {
    messagePar.textContent = "You Win"
    scoreCardSection.style.color = GREEN
    messagePar.style.backgroundColor = GREEN
    yourScoreSpan.textContent++

}
const openModal = () => {
    modalCardSection.classList.add("show")
    if(yourScoreSpan.textContent === "10") {
        finalMessagePar.textContent = "👏 You Win"
        document.querySelector(".modal").style.backgroundColor = GREEN
        playAgainButton.style.color = GREEN
    }else{
        finalMessagePar.textContent = "😢 You Lost"
        document.querySelector(".modal").style.backgroundColor = RED
        playAgainButton.style.color = RED
    }

}

 

// rockImg.addEventListener("click", ()=> {
    
//     image.src = "./img/rock.png"
//     image.alt = "rock"
//     yourChoiceDiv.appendChild(image)
//     // yourChoiceDiv.innerHTML = '<img src="./img/rock.png" alt="rock">'
// })
// paperImg.addEventListener("click", ()=> {
    
//     image.src = "./img/paper.png"
//     image.alt = "paper"
//     yourChoiceDiv.appendChild(image)
//     // yourChoiceDiv.innerHTML = '<img src="./img/rock.png" alt="rock">'
// })
// scissorImg.addEventListener("click", ()=> {
    
//     image.src = "./img/scissor.png"
//     image.alt = "scissor"
//     yourChoiceDiv.appendChild(image)
//     // yourChoiceDiv.innerHTML = '<img src="./img/rock.png" alt="rock">'
// })


