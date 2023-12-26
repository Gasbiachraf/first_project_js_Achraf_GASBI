
let Database = [];

class User {
    constructor(userName, userEmail, userAge, userPassword) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userAge = userAge;
        this.userPassword = userPassword;
    }
}

let userChoose = prompt(`hello dear user what do you want : sign-up, log-in or change-password`)
while (true) {
    if (userChoose == 'sign-up') {
        //^ 1-NAME  :
        let askName = prompt(`enter your name`);
        let numbersSpeCar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '*', '@', '&', '(', '-', '_', 'ç', 'à', ')', '=', '+', '$', '^', '#', '/', ':', ';'];
        while (true) {
            let arrAskName = askName.split("")
            let check = []
            for (let index = 0; index < arrAskName.length; index++) {
                let element = arrAskName[index];
                check = numbersSpeCar.filter(numbe => numbe == element)
            }
            if (check.length < 1) {
                if (askName.length > 5) {
                    let deletespaceName = askName.trim();
                    let arrName = deletespaceName.split(` `);
                    let i = 0;
                    arrName.forEach(element => {
                        element = element.charAt(0).toUpperCase() + element.slice(1).toLocaleLowerCase();
                        arrName[i] = element;
                        i++
                    });
                    let Name = arrName.join(` `);
                    console.log(Name);
                    break
                } else {
                    askName = prompt(`the name verry small enter your fullname`);
                }
            } else {
                askName = prompt(`your name contain special characters ! enter your fullname`);
            }
        }
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
        //^  Age  :
        let Age = prompt(`enter your age`);
        while (true) {
            let arrAge = Age.split("")
            let checkAge = arrAge.filter(element => element == ' ')
            if (checkAge.length < 1 && Age < 100 && parseInt(Age) != NaN && Age != "") {
                console.log(parseInt(Age));
                break
            } else {
                Age = prompt(`your age is not corect ! enter your age`);
            }
        }
        //^  password  :
        let pasword = prompt(`enter your password`);
        while (true) {
            let arrpasword = pasword.split("");
            let checkpasword = arrpasword.filter(element => element == ' ')
            let checkPwSpecar = arrpasword.filter(element => (element == "@") || (element == "#") || (element == "-") || (element == "+") || (element == "*") || (element == "/"))
            if (checkpasword.length < 1 && pasword != "" && pasword.length > 7 && checkPwSpecar.length > 0) {
                console.log(pasword);
                break
            } else {
                pasword = prompt(`your password is not corect ! enter your pasword`);
            }
        }
        //^  conferme password  :
        let confermepasword = prompt(`conferme your password`)
        if (pasword == confermepasword) {
            console.log(`you are done`);
            break
        } else {
            console.log(`try again`);
        }
        

    } else if (userChoose == 'log-in') {

    } else if (userChoose == 'change-password') {

    } else if (userChoose == 'exit') {

    } else {
        console.log(`error`);
    }
}



