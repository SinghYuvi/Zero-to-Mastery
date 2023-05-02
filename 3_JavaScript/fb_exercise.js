var database = [
    {
        userName:"yuvraj",
        password:"775608"
    },
    {
        userName:"singh",
        password:"154454"
    },
    {
        userName:"mister",
        password:"546545"
    },
]

var newsfeed = [
    {
        userName : "yuvraj",
        timeline : "So tired from all the learning!"
    },
    {
        userName: "singh",
        timeline: "JavaScript is so cool!"
    },
    {
        userName: "mister",
        timeline: "JavaScript is pretty cool!"
    }
]
function isUserValid(userName,password){
    for(i=0; i<database.length; i++){
        if(database[i].userName === userName &&
            database[i].password){
                return true;
            }
    }
    return false;
}

function signIn(userName,password){
    
    if(isUserValid(userName,password)){
        console.log(newsfeed[i].timeline);
    }else{
        alert("Sorry!wrong Username and Password!")
    }
}

var userNamePrompt = prompt("Enter your Username");
var passwordPrompt = prompt("Enter your Password");

signIn(userNamePrompt,passwordPrompt);


