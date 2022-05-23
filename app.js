const formulaire = document.getElementsByTagName('form');
const text = document.getElementById('myText').value;
const add = document.getElementById('ajout');
const hide = document.createElement('input');
hide.setAttribute('supprimer', 'X');
const check = document.getElementsByClassName('check');
const list = document.querySelector('ul');

function addList() {
    const newLi = document.createElement('li');
    const newCheck = document.createElement('input');
    newCheck.type = "checkbox";
    list.appendChild(newLi);
    newLi.textContent = myText.value;
    newLi.appendChild(newCheck);
    console.log(newLi.textContent);
}