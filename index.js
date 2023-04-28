import dataKeys from './js/dataKeys';
import Key from './js/Key';

// Create main title
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const p1 = document.createElement('p');
const textarea = document.createElement('textarea');

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
div.append(h1, p, p1, textarea);

const generateKeys = (data) => {
  const keys = [];
  keys.push(new Key(data));
};
