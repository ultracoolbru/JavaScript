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

const li3 = document.querySelector('li:nth-of-type(2)');
li3.style.color = 'green';

//https://www.javascripttutorial.net/javascript-dom/javascript-queryselector
const grouping = document.querySelectorAll('header, input');
console.log(grouping);

// Styling
const section = document.querySelector('section');
const button = document.querySelector('button');
const changeContent = document.getElementById('change-content');
const createElement = document.getElementById('create-element');
const cloneNode = document.getElementById('clone-node');
const remove = document.getElementById('remove-element');

// Added the array position because it returns a list of elements.
const ul = document.getElementsByClassName('blue-bg')[0];

section.style.backgroundColor = 'blue';

button.addEventListener('click', () => {
  // if (section.className = 'red-bg visisble') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // This is quicker than above.
  section.classList.toggle('visible');
  section.classList.toggle('invisible');

  ul.classList.toggle('invisible');
});

changeContent.addEventListener('click', () => {
  // When concatenating innerHTML, will rewrite the entire element, which is a performance issue.
  // ul.innerHTML = ul.innerHTML + "<li> This is a new H2 </li>";
  
  // innerHTML is good to replace the entire element, not if you want to save state.
  // ul.innerHTML = "<h2> This is a new H2 </h2>";

  // If you want to save state, use insertAdjacentHTML.
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
  ul.insertAdjacentHTML('beforeend', "<li> This is a new H2 </li>");
});

// Much more efficient than innerHTML or insertAdjacentHTML and allows you to add class name, etc.
createElement.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.textContent = 'This is a new li';
  ul.append(li);

  // This will return undefind because it does not have any children.
  // const prep = ul.lastElementChild.before(li);
  // ul.prepend(prep);

  const nl = document.createElement('li');  
  nl.className = 'list-item';
  nl.textContent = 'This is a pre li';
  ul.prepend(nl);

  // ul.replaceWith(nl);
});

// Cloning is good for copying elements.
cloneNode.addEventListener('click', () => {
  const li = document.querySelector('li');
  const clone = li.cloneNode(true);
  clone.textContent = 'This is a clone';
  ul.append(clone);
});

remove.addEventListener('click', () => {
  // const ul = document.querySelector('ul');
  // ul.remove();

  // This way is preferred and actually removes the element from the DOM.
  const li = document.querySelector('li');
  li.parentElement.removeChild(li);
});