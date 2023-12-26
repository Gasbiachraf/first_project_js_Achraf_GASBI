let Database = [];

class User {
    constructor(userName, userEmail, userAge, userPassword) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userAge = userAge;
        this.userPassword = userPassword;
    }
}

let oussama = new User('oussama', 'oussama@gmail.com', 25, 'oussama@');
// let achraf = new User('' , '' , 0 , '') ;
Database.push(oussama)
// Database.push(achraf) 
console.log(Database);




while (true) {
    let userChoose = prompt(`hello dear user what do you want : sign-up, log-in or change-password`)

    if (userChoose == 'sign-up') {
        while (true) {
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
                        var Usname = arrName.join(` `);
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
                let checkEmailExist = Database.filter(element => element.userEmail == deletespaceEmail)
                if (checkEmailExist.length < 1) {
                    if (checkarobase.length == 1) {
                        if (checkemail.length < 1) {
                            if (deletespaceEmail.length >= 10) {
                                var UsEmail = deletespaceEmail.toLowerCase()
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
                } else {
                    askEmail = prompt('the email already exists! enter your email')
                }
            }
            //^  Age  :
            let Age = prompt(`enter your age`);
            while (true) {
                let arrAge = Age.split("")
                let checkAge = arrAge.filter(element => element == ' ')
                if (checkAge.length < 1 && Age < 100 && parseInt(Age) != NaN && Age != "") {
                    console.log(parseInt(Age));
                    var UsAge = parseInt(Age);
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
            let confermepasword = prompt(`conferme your password`);
            if (pasword == confermepasword) {
                console.log(`you are done`);
                let achraf = new User(Usname, UsEmail, UsAge, pasword);
                Database.push(achraf);
                console.log(Database);
                break
            } else {
                console.log(`try again`);
            }

        }

    } else if (userChoose == 'log-in') {
        let loginEmail = prompt(`enter your email`);
        let loginpassword = prompt(`enter your password`);
        while (true) {
            let checkLoginEmail = Database.filter(element => element.userEmail == loginEmail)
            let checkLoginpassword = Database.filter(element => element.userPassword == loginpassword)
            if (checkLoginEmail.length>0 && checkLoginpassword.length>0 ) {
                console.log(`welcome`);
                break
            } else {
                loginEmail = prompt(`email or password incorect try again ! enter your email`);
                loginpassword = prompt(`enter your password`);

            }

        }
    } else if (userChoose == 'change-password') {


    } else if (userChoose == 'exit') {
        userChoose = prompt(` Choose one of the good things  : sign-up, log-in or change-password`);
    } else {
        userChoose = prompt(` Choose one of the good things  : sign-up, log-in or change-password`);

    }
}





// let achraf = new User( askName , askEmail , Age , pasword );
// Database.push(achraf);
// console.log(Database);



