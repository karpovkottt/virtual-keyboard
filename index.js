// eslint-disable-next-line import/extensions
import Key from './js/Key.js';
// eslint-disable-next-line import/extensions
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

const setFocus = () => {
  document.getElementById('textarea').focus();
};

setFocus();

const arrayKeys = document.querySelectorAll('.keyboard__key');

const addKeysNames = () => {
  for (let i = 0; i < arrayKeys.length; i += 1) {
    let template = '';
    const classKey = `keyboard__key key-${dataKeys[i].engName}`;
    arrayKeys[i].setAttribute('class', classKey);
    template += `<span class="eng">${dataKeys[i].engName}</span>`;
    if (dataKeys[i].engName === 'backspace' || dataKeys[i].engName === 'space' || dataKeys[i].engName === 'tab'
    || dataKeys[i].engName === 'capslock' || dataKeys[i].engName === 'enter' || dataKeys[i].engName === 'alt-R' || dataKeys[i].engName === 'shift'
    || dataKeys[i].engName === 'ctrl-R' || dataKeys[i].engName === 'win' || dataKeys[i].engName === 'up' || dataKeys[i].engName === 'ctrl-L' || dataKeys[i].engName === 'alt-L'
    || dataKeys[i].engName === 'down' || dataKeys[i].engName === 'left' || dataKeys[i].engName === 'right') {
      template += `<span class="engUpperCase hidden">${dataKeys[i].engName}</span>`;
    } else {
      template += `<span class="engUpperCase hidden">${dataKeys[i].engName.toUpperCase()}</span>`;
    }
    if (dataKeys[i].engName === 'backspace' || dataKeys[i].engName === 'space' || dataKeys[i].engName === 'tab'
    || dataKeys[i].engName === 'capslock' || dataKeys[i].engName === 'enter' || dataKeys[i].engName === 'alt-R' || dataKeys[i].engName === 'shift'
    || dataKeys[i].engName === 'ctrl-R' || dataKeys[i].engName === 'win' || dataKeys[i].engName === 'up' || dataKeys[i].engName === 'ctrl-L' || dataKeys[i].engName === 'alt-L'
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

const space = document.querySelector('.key-space');
const tab = document.querySelector('.key-tab');
const backspace = document.querySelector('.key-backspace');
const enter = document.querySelector('.key-enter');
const ctrlLeft = document.querySelector('.key-ctrl-L');
const ctrlRight = document.querySelector('.key-ctrl-R');
const altLeft = document.querySelector('.key-alt-L');
const altRight = document.querySelector('.key-alt-R');
const shiftLeft = document.querySelector('.key-shift-L');
const shiftRight = document.querySelector('.key-shift-R');
const printText = document.getElementById('textarea');

function pressKey(e) {
  setFocus();

  for (let i = 0; i < eng.length; i += 1) {
    if (e.key.toLowerCase() === eng[i].innerText) {
      const keyParent = eng[i].parentNode;
      keyParent.classList.add('active');
    }
  }

  if (e.code === 'Space') {
    space.classList.add('active');
  }
  if (e.code === 'Tab') {
    tab.classList.add('active');
  }
  if (e.code === 'Backspace') {
    backspace.classList.add('active');
  }
  if (e.code === 'Enter') {
    enter.classList.add('active');
  }
  if (e.code === 'CapsLock') {
    capsLock.classList.add('active');
    activeCapsLock();
  }
  if (e.code === 'ShiftLeft') {
    shiftLeft.classList.add('active');
  }
  if (e.code === 'ShiftRight') {
    shiftRight.classList.add('active');
  }
  if (e.code === 'ControlLeft') {
    ctrlLeft.classList.add('active');
  }
  if (e.code === 'ControlRight') {
    ctrlRight.classList.add('active');
  }
  if (e.code === 'AltLeft') {
    altLeft.classList.add('active');
  }
  if (e.code === 'AltRight') {
    altRight.classList.add('active');
  }
}

function unpressKey(e) {
  for (let i = 0; i < eng.length; i += 1) {
    if (e.key.toLowerCase() === eng[i].innerText) {
      const keyParent = eng[i].parentNode;
      keyParent.classList.remove('active');
    }
  }
  if (e.code === 'Space') {
    space.classList.remove('active');
  }
  if (e.code === 'Tab') {
    tab.classList.remove('active');
  }
  if (e.code === 'Backspace') {
    backspace.classList.remove('active');
  }
  if (e.code === 'Enter') {
    enter.classList.remove('active');
  }
  if (e.code === 'CapsLock') {
    capsLock.classList.remove('active');
  }
  if (e.code === 'ShiftLeft') {
    shiftLeft.classList.remove('active');
  }
  if (e.code === 'ShiftRight') {
    shiftRight.classList.remove('active');
  }
  if (e.code === 'ControlLeft') {
    ctrlLeft.classList.remove('active');
  }
  if (e.code === 'ControlRight') {
    ctrlRight.classList.remove('active');
  }
  if (e.code === 'AltLeft') {
    altLeft.classList.remove('active');
  }
  if (e.code === 'AltRight') {
    altRight.classList.remove('active');
  }
  setFocus();
}

function clickKey(e) {
  setFocus();

  if (e.target.innerText === 'space') {
    printText.innerHTML += ' ';
  } else
  if (e.target.innerText === 'tab') {
    printText.innerHTML += '     ';
  } else
  if (e.target.innerText === 'backspace') {
    printText.innerHTML = printText.innerHTML.slice(0, -1);
  } else
  if (e.target.innerText === 'enter') {
    printText.innerHTML += '\n';
  } else
  if (e.target.innerText === 'capslock') {
    printText.innerHTML += '';
  } else
  if (e.target.innerText === 'shift-L') {
    printText.innerHTML += '';
  } else
  if (e.target.innerText === 'shift-R') {
    printText.innerHTML += '';
  } else
  if (e.target.innerText === 'ctrl-L') {
    printText.innerHTML += '';
  } else
  if (e.target.innerText === 'ctrl-R') {
    printText.innerHTML += '';
  } else
  if (e.target.innerText === 'alt-L') {
    printText.innerHTML += '';
  } else
  if (e.target.innerText === 'alt-R') {
    printText.innerHTML += '';
  } else {
    printText.innerHTML += e.target.innerText;
  }
}

keyboard.addEventListener('keydown', pressKey);
keyboard.addEventListener('keyup', unpressKey);
keyboard.addEventListener('click', clickKey);
