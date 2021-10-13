/* Logic section of code */
/* Computer selects rock/paper/siczzors randomly */
function computerPlay()
{
    let choice = Math.floor(Math.random() * 3) + 1
    switch(choice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scizzors";
            break;
        
     }
}
/* Here is where the game is processed */
function processGame(User)
{
    let Computer = computerPlay()
    User = User.toLowerCase()
    Computer = Computer.toLowerCase()
    if (Computer === "rock") {
        switch(User){
            case "rock":
                return "Draw, as computer had rock and Rock = Rock";
                break;
            case "paper":
                return "User wins, as computer had rock and Paper > Rock";
                break;
            case "scizzors":
                return "User looses, as computer had rock and Rock > Scizzors"
        }
    } else if (Computer === "paper") {
        switch(User){
            case "rock":
                return "User looses, as computer had paper and Paper > Rock";
                break;
            case "paper":
                return "Draw, as computer had paper and Paper = Paper";
                break;
            case "scizzors":
                return "User wins, as computer had paper and Scizzors > Paper";
                break;
        }
    } else if (Computer === "scizzors") {
        switch(User){
            case "rock":
                return "User wins, as computer had scizzors and Rock > Scizzors";
                break;
            case "paper":
                return "User looses, as computer had scizzors and Scizzors > Paper";
                break;
            case "scizzors":
                return "User draws, as computer had scizzors and Scizzors = Scizzors";
                break;
        }
    }
}

function result(message)
{   
    console.log(message)
    document.getElementById("result").innerHTML = message
}

const scizzors = document.querySelector('#scizzors')
scizzors.addEventListener('click', () => {
    let message = processGame("Scizzors")
    console.log(message)
    result(message)
})

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    let message = processGame("Rock")
    console.log(message)
    result(message)
})



const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    message = processGame("Paper")
    console.log(message)
    result(message)
})
