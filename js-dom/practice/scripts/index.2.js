// Selection of DOM elements

// getElemnetById()
document.getElementById("header"); // Selects the element with the id "header"
console.log(document.getElementById("header"));

// getElementsByClassName()
// let items = document.getElementsByClassName("item"); 
// Selects all elements with the class "header"
// console.log(items);

// for(let i = 0; i < items.length; i++){
//     // items[i].style.color = "red"; 
//     // Changes the color of each item to red
// }

// let itemUL = document.getElementById('items');
// let items = itemUL.getElementsByClassName("item");
// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "red"; 
//     // Changes the color of each item to red
// }

// getElementsByTagName()
document.getElementsByTagName("h1"); // Selects all <h1> elements
console.log(document.getElementsByTagName("li"));



// querySelector() 
// document.querySelector("#header"); 
// Selects the first element with the id "header"

// let header = document.querySelector(".header");
// console.log(header);

// let newTask = document.querySelector("#new-task");
// console.log(newTask);

// let lastItem = document.querySelector(".item:last-child");
// let nthItem = document.querySelector(".item:nth-child(2");
// console.log(lastItem);
// console.log(nthItem);
// lastItem.style.color = "red"; 
// nthItem.style.color = "red"; 

// querySelectorAll()
// let items = document.querySelectorAll(".item");
// let lastItems = document.querySelectorAll(".item:last-child");
// for(let element of lastItems){
//     element.style.color = "red"; 
// }
// console.log(lastItems);
// // console.log(item);

// complex selection

// let lastItem = document.querySelector("#items").querySelector(".item:nth-child(3)");
// lastItem.style.color = "red";
// console.log(lastItem);

let lastItems = document.querySelector(".items").querySelectorAll(".item:last-child");
for(let element of lastItems){
    element.style.color = "red"; 
}
console.log(lastItems);