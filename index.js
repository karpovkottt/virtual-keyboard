import Key from './js/Key.js';
import dataKeys from './js/dataKeys.js';

// Create main title
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const p1 = document.createElement('p');
const textarea = document.createElement('textarea');

const divKeyboard = document.createElement('div');
divKeyboard.className = 'keyboard';

div.className = 'main';
h1.className = 'title';
h1.innerHTML = 'Virtual Keyboard';
p.className = 'description';
p.innerHTML = 'The keyboard was created in the OS Windows';
p1.className = 'description';
p1.innerHTML = 'To switch keyboard layout: CTRL + ALT';
textarea.className = ('textarea');
textarea.setAttribute('name', 'textarea');
textarea.setAttribute('id', 'textarea');
textarea.setAttribute('cols', '30');
textarea.setAttribute('rows', '10');
document.body.append(div);
div.append(h1, p, p1, textarea, divKeyboard);

const divKeyboardKeys = document.createElement('div');
divKeyboardKeys.className = 'keyboard__keys';

const insertDivKeyboardKeys = document.querySelector('.keyboard');
insertDivKeyboardKeys.append(divKeyboardKeys);

const keyboard = document.querySelector('.keyboard__keys');

const generateKeys = (data) => {
  const keys = [];
  for (let i = 0; i < data.length; i += 1) {
    keys.push(new Key(data));
  }
  return keys;
};

const renderKeys = () => {
  generateKeys(dataKeys).forEach((key) => {
    keyboard.append(key.generateKey());
  });
};

renderKeys();

const arrayKeys = document.querySelectorAll('.keyboard__key');

const addKeysNames = () => {
  for (let i = 0; i < arrayKeys.length; i += 1) {
    let template = '';
    const classKey = `keyboard__key key-${dataKeys[i].engName}`;
    arrayKeys[i].setAttribute('class', classKey);
    template += `<span class="eng">${dataKeys[i].engName}</span>`;
    if (dataKeys[i].engName === 'backspace' || dataKeys[i].engName === 'space' || dataKeys[i].engName === 'tab'
    || dataKeys[i].engName === 'capslock' || dataKeys[i].engName === 'enter' || dataKeys[i].engName === 'alt' || dataKeys[i].engName === 'shift'
    || dataKeys[i].engName === 'ctrl' || dataKeys[i].engName === 'win' || dataKeys[i].engName === 'up'
    || dataKeys[i].engName === 'down' || dataKeys[i].engName === 'left' || dataKeys[i].engName === 'right') {
      template += `<span class="engUpperCase hidden">${dataKeys[i].engName}</span>`;
    } else {
      template += `<span class="engUpperCase hidden">${dataKeys[i].engName.toUpperCase()}</span>`;
    }
    if (dataKeys[i].engName === 'backspace' || dataKeys[i].engName === 'space' || dataKeys[i].engName === 'tab'
    || dataKeys[i].engName === 'capslock' || dataKeys[i].engName === 'enter' || dataKeys[i].engName === 'alt' || dataKeys[i].engName === 'shift'
    || dataKeys[i].engName === 'ctrl' || dataKeys[i].engName === 'win' || dataKeys[i].engName === 'up'
    || dataKeys[i].engName === 'down' || dataKeys[i].engName === 'left' || dataKeys[i].engName === 'right') {
      template += `<span class="rus hidden">${dataKeys[i].rusName}</span>`;
    } else {
      template += `<span class="rusUpperCase hidden">${dataKeys[i].rusName.toUpperCase()}</span>`;
    }
    arrayKeys[i].innerHTML = template;
  }
};

addKeysNames();

const capsLock = document.querySelector('.key-capslock');
const engUpperCase = document.querySelectorAll('.engUpperCase');
const eng = document.querySelectorAll('.eng');
const activeCapsLock = () => {
  capsLock.classList.toggle('capslock--pressed');
  engUpperCase.forEach((el) => {
    el.classList.toggle('hidden');
  });
  eng.forEach((el) => {
    el.classList.toggle('hidden');
  });
};

capsLock.addEventListener('click', activeCapsLock);
