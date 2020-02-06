alert ("Hello!")

confirm ("do you like my work?")

function good (){
    var person = prompt("are you studing here?(yes/no)");
    while(person.toLocaleLowerCase() !=='yes' && person !=='no'){
    var person = prompt("are you studing here?(yes/no)");
   
    }
    
    
if (person !=null) { 
 result='so '  
 return result;
}

document.write('<h3>' +good()+ '<h3>' );

}









