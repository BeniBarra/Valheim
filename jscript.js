//prompts the user at start up of page
let odinSent = prompt('Did Odin send you? Type yes or no');
console.log(odinSent);
//if the user response is != to the expected yes/no, prompt will again
function whoSentYou(){
    while (odinSent.toLowerCase() != 'yes' && odinSent.toLowerCase() != 'no'){
        odinSent = prompt('Did Odin send you? Type yes or no');
    }
}
//calling whoSentYou to initalize
whoSentYou()
//associates the function above and below
var user1 = odinSent;
//sets considition if yess/no response is aquired to perform if/else if
function sentBy(){
    if (user1 == 'yes'){
        document.write('<h2>Valheim Welcomes you!</h2>');
    }
    else if (user1 == 'no'){
        let button = confirm ("THEN AWAY WITH YOU!!!");
        document.write('<h2>Be Gone Pesky GreyDwarf!!</h2>');
    }
}
//promt the user to request how many pictures they wish to see
function addPicture(){
    picCount = prompt ("How many GreyDwarfs do you wish to slay?")
    url= "https://i.imgur.com/PdFrWUa.jpg"
    if (picCount >=15){
        let button = confirm ("That's way to many! Try less next time...");
    }
    else {
        for(let i = 0; i <picCount; i ++){
            document.write('<img src="' + url +'">');
        }
    }
}