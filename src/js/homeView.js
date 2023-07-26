import View from './View.js';

class HomeView extends View {
  _logo = document.createElement('div');
  _msg = document.createElement('p');
  _btnViewMenu = document.createElement('button');

  constructor() {
    super();
    this._generateContent();
  }

  addHandlerClick(handler) {
    handler();
  }

  _generateContent() {
    [this._logo, this._msg].forEach(el => {
      el.style.color = 'white';
      el.style.textAlign = 'center';
    });

    this._logo.textContent = 'Bread Story Bakery';
    this._logo.style.margin = '20vh 0 0 0';
    this._logo.style.fontFamily = "'Ms Madi', cursive";
    this._logo.style.fontSize = '80px';

    this._msg.textContent =
      'We are happy to serve you freshly baked bread everyday.';

    this._btnViewMenu.textContent = 'ORDER NOW';
    this._btnViewMenu.style.border = 'none';
    this._btnViewMenu.style.borderRadius = '5px';
    this._btnViewMenu.style.background = 'white';
    this._btnViewMenu.style.padding = '10px 30px';

    [this._logo, this._msg, this._btnViewMenu].forEach(el =>
      this.contentEl.insertAdjacentElement('beforeend', el)
    );
  }
}

export default new HomeView();
