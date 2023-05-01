export default class Key {
  constructor({ engName, rusName }) {
    this.engName = engName;
    this.rusName = rusName;
  }

  // Generate key
  generateKey() {
    const key = document.createElement('button');
    key.className = `keyboard__key key-${this.engName}`;

    return key;
  }
}
