alert ("Hello!")

confirm ("do you like my work?")

function good (){
    var person = prompt("are you studing here?(yes/no)");
    while(person.toLocaleLowerCase() !=='yes' && person !=='no'){
    var person = prompt("are you studing here?(yes/no)");
   
    }
    var okay =prompt("are you studing here?(yes/no)");
    console.log(okay);
    var result="";
    
if (person !=null) { 
 result='so '  
 return result;
}
}
document.write('<h3>' +good()+ '<h3>' );





