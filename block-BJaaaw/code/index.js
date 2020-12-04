// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = prompt(`Enter a number`);
if (number % 2 === 0) {
  alert(`${number} is even`);
} else {
  alert(`${number} is odd`);
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let newNumberOne = prompt(`Enter first new number`);
let newNumberTwo = prompt(`Enter second new number`);
if (newNumberOne > newNumberTwo) {
  alert(`${newNumberOne} is greater`);
} else {
  alert(`${newNumberTwo} is greater`);
}

// 3. Convert the above code using`?` terniary operator

newNumberOne > newNumberTwo
  ? alert(`${newNumberOne} is greater`)
  : alert(`${newNumberTwo} is greater`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt(`Enter your house name:-`);
if (houseName === `stark`) {
  alert(`Winter is coming`);
} else if (houseName === `lannister`) {
  alert(`A lannister always pays his debt`);
} else {
  alert(`All men must die`);
}

// 5. Convert the above code using`?` terniary operator

houseName === `stark`
  ? alert(`Winter is coming`)
  : houseName === "lannister"
  ? alert(`A lannister always pays his debt`)
  : alert(`All men must die`);

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthNumber = Number(prompt(`Enter a number for month`));

switch (monthNumber) {
  case 1:
    alert(`January`);
    break;
  case 2:
    alert(`Feb`);
    break;
  case 3:
    alert(`Mar`);
    break;
  case 4:
    alert(`Apr`);
    break;
  case 5:
    alert(`May`);
    break;
  case 6:
    alert(`Jun`);
    break;
  case 7:
    alert(`Jul`);
    break;
  case 8:
    alert(`Aug`);
    break;
  case 9:
    alert(`Sept`);
    break;
  case 10:
    alert(`Oct`);
    break;
  case 11:
    alert(`Nov`);
    break;
  case 12:
    alert(`Dec`);
    break;
  default:
    alert(`Still in search of this ${monthNumber} month number`);

}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = Number(prompt(`Enter your salary`));
let inHandSalary;

switch (true) {
  case salary <= 20000:
    inHandSalary = salary - (10 * salary) / 100;
    alert(`Your In-hand salary ${inHandSalary}`);
    break;
  case salary <= 40000:
    inHandSalary = salary - (20 * salary) / 100;
    alert(`Your In-hand salary ${inHandSalary}`);
    break;
  case salary > 50000:
    inHandSalary = salary - (30 * salary) / 100;
    alert(`Your In-hand salary ${inHandSalary}`);
    break;
  default:
    alert(`No salary`);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt("Enter your marks"));

if(marks >100){
  alert(`Marks cant be greater than 100`);
}else if(marks > 80 && marks <=100){
  alert(`Grade A`);
}else if (marks >50 && marks <=80){
  alert(`Grade B`)
}else if(marks > 30 && marks <=50){
  alert(`Grade C`);
}else {
  alert(`Grade D`);
}

switch (true) {
  case marks > 100:
    alert(`Marks cant be greater than 100`);
    break;
  case marks > 80 && marks <=100:
    alert(`Grade A`);
    break;
  case marks > 50 && marks <=80:
    alert(`Grade B`);
    break;
  case marks > 30 && marsk <=50:
    alert(`Grade C`);
    break;
  default:
    alert(`Grade D`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`What is the weather like outside`);

switch (true) {
  case weather === `sunny`:
    alert(`Wear a T-shirt`);
    break;
  case weather === `rainy`:
    alert(`Don't forget to take your raincoat`);
    break;
  case weather === `hot`:
    alert(`Get a hanky`);
    break;
  case weather === `freezing`:
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`);
}
