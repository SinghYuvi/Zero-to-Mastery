//#1 change this function into a ternary and assign it to variable called experiencePoints
function winBattle(bool){
    return bool;
}
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}
//Solutions - Ternary Operator
var expPoints = winBattle(true) ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            return whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
undefined

//#3 return value when moveCommand("back");
"you arrived home"

//#4 return value when moveCommand("right");
"you found a river"

//#5 return value when moveCommand("left");
undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!


let exp = 100;
var wizardLevel = false; 

if(exp > 90){
    var wizardLevel = true;
    console.log('Inside if only[No Function]', wizardLevel);
    }
    console.log('Outside if only[No Function', wizardLevel);

function testScope(){
    if(exp > 90){
        var wizardLevel = true;
        console.log('Inside [With Function]', wizardLevel);
        }
        console.log('Outside [With Function', wizardLevel);
    
}