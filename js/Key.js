export default class Key {
  constructor({ engName, rusName }) {
    this.engName = engName;
    this.rusName = rusName;
  }

  // Generate key
  generateKey() {
    let template = '';
    const key = document.createElement('button');
    key.className = `keyboard__key key-${this.engName}`;

    if (this.engName) {
      template += `<span class='eng'>${this.engName}</span>`;
      template += `<span class='rus'>${this.rusName}</span>`;
    }

    key.innerHTML = template;
    return key;
  }
}
