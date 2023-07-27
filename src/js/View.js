import '../style.css';

export default class View {
  bodyEl = document.body;

  constructor() {
    this._setDisplay();
  }

  render() {
    this.contentEl.innerHTML = '';
    this._generateContent();
  }

  _setDisplay() {
    this.bodyEl.style.height = '100vh';
    this.bodyEl.style.display = 'flex';
    this.bodyEl.style.flexDirection = 'column';
  }
}
