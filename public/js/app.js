

//^ 1-NAME 
let askName  = prompt(`enter your name`) ;
while (true) {
    if (askName.length > 5) {
        let deletespaceName = askName.trim() ;
        let arrName = deletespaceName.split(` `) ;
        let i = 0 ;
    arrName.forEach(element => {
        element = element.charAt(0).toUpperCase() + element.slice(1) ;
        arrName[i] = element ; 
        i++
    });
    let Name = arrName.join(` `) ;
    console.log(Name);
    break
    
    }else{
        askName  = prompt(`the name verry small enter your fullname`) ;
    }
}






