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
function processGame()
{
    let Computer = computerPlay()
    let User = prompt("Enter Rock, Paper or Scizzors.");
    User = User.toLowerCase()
    Computer = Computer.toLowerCase()
    if (Computer === "rock") {
        switch(User){
            case "rock":
                return "Draw, as Rock = Rock";
                break;
            case "paper":
                return "User wins, as Paper > Rock";
                break;
            case "scizzors":
                return "User looses, as Rock > Scizzors"
        }
    } else if (Computer === "paper") {
        switch(User){
            case "rock":
                return "User looses, as Paper > Rock";
                break;
            case "paper":
                return "Draw, as Paper = Paper";
                break;
            case "scizzors":
                return "User wins, as Scizzors > Paper";
                break;
        }
    } else if (Computer === "scizzors") {
        switch(User){
            case "rock":
                return "User wins, as Rock > Scizzors";
                break;
            case "paper":
                return "User looses, as Scizzors > Paper";
                break;
            case "scizzors":
                return "User draws, as Scizzors = Scizzors";
                break;
        }
    }
}
function game()
{
    for (let i = 1; i <= 5; i++) {
        let result = processGame()
        console.log(result)
    }

}
game()