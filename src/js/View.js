import '../style.css';

export default class View {
  bodyEl = document.body;

  constructor() {
    this._setDisplay();
  }

  createDiv() {
    return document.createElement('div');
  }

  createPara() {
    return document.createElement('p');
  }

  _setDisplay() {
    this.bodyEl.style.height = '100vh';
    this.bodyEl.style.display = 'flex';
    this.bodyEl.style.flexDirection = 'column';
  }
}
