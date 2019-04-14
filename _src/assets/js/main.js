'use strict';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

function findName() {
    fetch(`https://api.github.com/users/${input.value}`)
        .then(response => response.json())
        .then(data => {
            let completeName = data.name;
            console.log(completeName);
            for (let firstName of completeName) {
                firstName = firstName;
                console.log(firstName);
            }
            list.innerHTML = '<li>firstName</li>';
        });
}


//Function that allows to press Enter besides search button
function enterKey(e) {
    if (e.keycode == 13) {
        findName();
    }
}

btn.addEventListener('click', findName);
window.addEventListener('keydown', enterKey);