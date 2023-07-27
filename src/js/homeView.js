import MainView from './mainView.js';

class HomeView extends MainView {
  _container = this.createDiv();
  _logo = this.createDiv();
  _msg = this.createPara();
  _btnViewMenu = document.createElement('button');

  constructor() {
    super();
    this._generateContent();
  }

  addHandlerClick(btn) {
    btn.addEventListener('click', this.render.bind(this));
  }

  _generateContent() {
    this._setContainer();
    this._generateLogoMsg();
    this._generateButton();

    [this._logo, this._msg, this._btnViewMenu].forEach(
      el => this._container.appendChild(el) // output
    );
    // this.contentEl.appendChild(this._container);
  }

  _setContainer() {
    this._container.style.display = 'flex';
    this._container.style.flexDirection = 'column';
    this._container.style.justifyContent = 'center';
    this._container.style.alignItems = 'center';
    this._container.style.gap = '18px';
  }

  _generateLogoMsg() {
    [this._logo, this._msg].forEach(el => {
      el.style.color = 'white';
      el.style.textAlign = 'center';
    });

    this._logo.style.fontFamily = "'Ms Madi', cursive";
    this._logo.style.fontSize = '80px';
    this._logo.textContent = 'Bread Story Bakery';

    this._msg.textContent =
      'We are happy to serve you freshly baked bread everyday.';
  }

  _generateButton() {
    this._btnViewMenu.textContent = 'ORDER NOW';
    this._btnViewMenu.style.border = 'none';
    this._btnViewMenu.style.borderRadius = '5px';
    this._btnViewMenu.style.background = 'white';
    this._btnViewMenu.style.padding = '10px 30px';
  }
}

export default new HomeView();
