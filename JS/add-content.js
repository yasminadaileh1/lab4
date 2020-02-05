alert ("Hello!")

confirm ("do you like my work?")

function greeting(){
    var age  =prompt("how old are you?");
    var greeting
    if (age < 20) {
        greeting ='hello young!'
    }
    if (    age>21 && age <50){
        greeting ='hello youth'
    }
    if (age > 51) {
        greeting ='hello eldery'
    }
    
    console.log (greeting);
    
    return greeting;
}
greeting();
document.write('<h3>'+greeting() + '<h3>')