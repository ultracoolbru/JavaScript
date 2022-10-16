const querySelector = document.querySelector('.list-item');

console.dir(querySelector);

const h1 = document.querySelector('h1');
h1.textContent = 'New Title';
h1.style.color = 'red';
h1.style.backgroundColor = 'black';

const input = document.querySelector('input');
console.dir(input);

input.setAttribute('value', 'Hello World');
input.getAttribute('value');

const li = document.querySelectorAll('li');
console.dir(li);

for (const item of li) {
  console.log(item.textContent);
}

const li1 = document.querySelector('li:first-of-type');
li1.style.color = 'red';

const li2 = document.querySelector('li:last-of-type');
li2.style.color = 'blue';