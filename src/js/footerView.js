import View from './View.js';

class footerView extends View {
  _footerEl = document.createElement('div');
  _para = document.createElement('p');

  constructor() {
    super();
    this._setFooter();
  }

  _setFooter() {
    this._footerEl.style.flex = 'none';

    this._footerEl.style.background = 'white';
    this._footerEl.style.height = '30px';
    this._footerEl.style.width = '100vw';

    this._footerEl.style.display = 'flex';
    this._footerEl.style.justifyContent = 'center';
    this._footerEl.style.alignItems = 'center';
    this._footerEl.style.fontSize = '0.8rem';

    this._para.textContent = '© Copyright by avanich28 : )';

    this._footerEl.appendChild(this._para);
    this.bodyEl.insertAdjacentElement('beforeend', this._footerEl);
  }
}

export default new footerView();
