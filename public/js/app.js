
//^ 1-NAME  : last instruction not done !

// let askName = prompt(`enter your name`);
// let numbersSpeCar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '*', '@', '&', '(', '-', '_', 'ç', 'à', ')', '=', '+', '$', '^', '#', '/' , ':' , ';'];
// while (true) {
//     let arrAskName = askName.split("")
//     let check = []
//     for (let index = 0; index < arrAskName.length; index++) {
//         let element = arrAskName[index];
//         check = numbersSpeCar.filter(numbe => numbe == element)
//     }
//     if (check.length < 1) {
//         if (askName.length > 5) {
//             let deletespaceName = askName.trim();
//             let arrName = deletespaceName.split(` `);
//             let i = 0;
//             arrName.forEach(element => {
//                 element = element.charAt(0).toUpperCase() + element.slice(1).toLocaleLowerCase();
//                 arrName[i] = element;
//                 i++
//             });
//             let Name = arrName.join(` `);
//             console.log(Name);
//             break

//         } else {
//             askName = prompt(`the name verry small enter your fullname`);
//         }
//     } else {
//         askName = prompt(`your name contain special characters ! enter your fullname`);
//     }

// }


//^ Email :
let askEmail = prompt(`enter your email`);

while (true) {
    let deletespaceEmail = askEmail.trim();
    let arrEmail = deletespaceEmail.split("");
    let checkemail = arrEmail.filter(element => element == ' ')
    let checkarobase = arrEmail.filter(element2 => element2 == '@')
    if (checkarobase.length == 1) {
        if (checkemail.length < 1) {
            if (deletespaceEmail.length >= 10) {
                let userEmail = deletespaceEmail.toLowerCase()
                console.log(userEmail);
                break
            } else {
                askEmail = prompt(`the email verry small enter your email again`);
            }
        } else {
            askEmail = prompt('your email has spaces in the middle ! enter your email')
        }
    } else if (checkarobase.length > 1) {
        askEmail = prompt('your email contain more "@" ! enter your email')
    } else {
        askEmail = prompt('your Email  does not contain exactly one "@" ! enter your email')
    }
}





