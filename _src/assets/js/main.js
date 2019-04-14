'use strict';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

const name = JSON.parse(localStorage.getItem('name'));

//Function to save the data of my username in LS
function saveLeireInLS() {
    fetch(`https://api.github.com/users/leireriel`)
        .then(response => response.json())
        .then(data => {
            const leireName = data.name;
            localStorage.setItem('name', JSON.stringify(leireName));
            name = JSON.parse(localStorage.getItem('name'));
        });
}

//Function to print name on screen
function printName(username) {
    console.log(username);
    list.innerHTML = '';
    for (let i = 0; i < username.length; i++) {
        if (username[i] === ' ') {
            break;
        }
        let letter = username[i];
        list.innerHTML += `<li class="item">${letter}</li>`;
    }
}

//Function to find user name
function findName() {
    if (input.value === 'leireriel') {
        if (name === null) {
            saveLeireInLS();
        }
        printName(name);
    } else {
        fetch(`https://api.github.com/users/${input.value}`)
            .then(response => response.json())
            .then(data => {
                let completeName = data.name;
                printName(completeName);
            });
    }
}


//Function that allows to press Enter besides search button
function enterKey(e) {
    if (e.keyCode == 13) {
        findName();
    }
}

btn.addEventListener('click', findName);
window.addEventListener('keydown', enterKey);