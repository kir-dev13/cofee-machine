"use strict"

/*let coffeeMachine = document.getElementById('coffee');
console.log(coffeeMachine);
let images = document.getElementsByTagName('img');
console.log(images);
let coffeeItems = document.getElementsByClassName('coffee-item');
console.log(coffeeItems);
let firstImage = coffeeItems[0].getElementsByTagName('Img');
console.log(firstImage[0]);*/

/*let coffeeMachine = document.querySelector('#coffee');
console.log(coffeeMachine);
let image = document.querySelector("img");
console.log(image);
let coffeItems = document.querySelectorAll('.coffee-item');
console.log(coffeItems);
let itemImages = document.querySelectorAll('.coffee-item img');
console.log(itemImages);
let cupImages = document.querySelectorAll('.coffee-item img, .coffee-cup img');
console.log(cupImages);*/

/*let coffeeMachine = document.querySelector('.coffee-machine');
coffeeMachine.style.border = '10px solid darkblue';
coffeeMachine.style.borderRadius = '25px';
coffeeMachine.style.position = 'absolute';
coffeeMachine.style.top = '15px';
coffeeMachine.style.left = '150px';
let coffeeMachineTop = coffeeMachine.style.top;
console.log( parseInt(coffeeMachineTop) );*/

/*let balance = document.querySelector('input[type="text"]');*/
// let balanceType = balance.getAttribute('type');
// console.log(balanceType);
// balance.setAttribute('type', 'date');

// console.log( balance.hasAttribute('placeholder') );
// balance.removeAttribute('aria-label');
/*balance.value = 500;
console.log(balance.value);*/

/*let changeButton = document.querySelector('.btn');
console.log(changeButton.classList);
changeButton.classList.remove('btn-primary');
changeButton.classList.add('btn-success');*/
// changeButton.classList.toggLe('btn-success');

// let displayText = document.querySelector('.display-text');
// console.log( displayText.innerHTML );
// console.log( displayText.innerText );
// displayText.innerHTML = '<b>Готовим кофе</b>';
/*displayText.innerText = '<b>Готовим кофе</b>';*/

// let elem = document.querySelectorAll('.coffee-item');
// elem[1].onclick = function () {
//   buyCoffee('Капучино', 50, this);
// }

// let timeout = setTimeout(paintBody, 5000, 'aqua');

// let changeButton = document.querySelector('.btn');
// changeButton.onclick = function () {
//   clearTimeout(timeout);
// }

// function paintBody(color) {
//   document.body.style.background = color;
// }

let interval = setInterval(trashConsole, 1000);

let changeButton = document.querySelector('.btn');
changeButton.onclick = function () {
  clearInterval(interval);
}
function trashConsole() {
  console.log(Math.random());
}