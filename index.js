function shout(string) {
    return string.toUpperCase();
} 

function whisper(string) {
    return string.toLowerCase();
} 

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}


function sayHiToGrandma(string){

    var uperCaseString = string.toUpperCase();
    var lowerCaseString = string.toLowerCase();  
     
    if(string === lowerCaseString){ 
        return "I can\'t hear you!"
    }  
    
    if(string === uperCaseString){
        return "YES INDEED!"
    }
    
    if(string == 'I love you, Grandma.'){
        return "I love you, too."
    }

}