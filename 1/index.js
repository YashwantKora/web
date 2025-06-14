// console.log(`Hello`);
// console.log(`I like pizza`);

// //window.alert("DANGER!");
// //window.alert("HELLO");

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = "Brawl Stars idk"

// let x;
// let y = 20;
// x = 10;

// let age = 18;
// let price = 10.99;
// let gpa = 9.79;
// let firstname = "Yashwant";
// let online = true;

// console.log(x);
// console.log(y);
// console.log(`You are ${age} years old!`);
// console.log(`The price is Rs.${price}`);
// console.log(`Your GPA is: ${gpa}`);
// console.log(typeof gpa);
// console.log(typeof firstname);
// console.log(typeof online);


let username;
// username = window.prompt("Enter The Username:");

// document.getElementById("myH1").textContent = "Hello " + username + "!";

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    username = username.toUpperCase();
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}!`;
}

let age;
let beforeAgeType;

document.getElementById("submit1").onclick = function(){
    age = document.getElementById("input1").value;
    beforeAgeType = typeof age;
    afterAgeType = Number(age);
    document.getElementById("p1").textContent = `Type of data before conversion: ${beforeAgeType}`;
    document.getElementById("p2").textContent = `Type of data after conversion: ${typeof afterAgeType}`;
}