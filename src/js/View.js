import '../style.css';

export default class View {
  bodyEl = document.body;
  fontColor = '#b91c1c';
  transitionValue = 'all 0.2s ease-in-out';

  constructor() {
    this._setDisplay();
  }

  createDiv() {
    return document.createElement('div');
  }

  createPara() {
    return document.createElement('p');
  }

  createBtn() {
    return document.createElement('button');
  }

  _setDisplay() {
    this.bodyEl.style.height = '100vh';
    this.bodyEl.style.display = 'flex';
    this.bodyEl.style.flexDirection = 'column';
  }
}
