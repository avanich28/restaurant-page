import MainView from './mainView.js';

class HomeView extends MainView {
  _container = this.createDiv();
  _logo = this.createDiv();
  _msg = this.createPara();
  _btnViewMenu = this.createBtn();

  constructor() {
    super();
    this._generateContent();
  }

  addHandlerClick(btn, btnArr) {
    btn.addEventListener('click', this.render.bind(this, btn, btnArr));
  }

  addHandlerClickViewMenu(menuObj, btn, btnArr) {
    this._btnViewMenu.addEventListener(
      'click',
      this.render.bind(menuObj, btn, btnArr)
    );
  }

  _generateContent() {
    this._setContainer();
    this._generateLogoAndMsg();
    this._generateButton();

    [this._logo, this._msg, this._btnViewMenu].forEach(
      el => this._container.appendChild(el) // output
    );

    this._addBtnEffect();
  }

  _setContainer() {
    this._container.style.display = 'flex';
    this._container.style.flexDirection = 'column';
    this._container.style.justifyContent = 'center';
    this._container.style.alignItems = 'center';
    this._container.style.gap = '18px';
  }

  _generateLogoAndMsg() {
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
    this._btnViewMenu.style.color = this.btnColor;
    this._btnViewMenu.style.padding = '10px 30px';
  }

  _addBtnEffect() {
    this._btnViewMenu.style.transition = this.transitionValue;
    this._btnViewMenu.addEventListener('mouseover', function () {
      this.style.transform = 'scale(1.05)';
    });

    this._btnViewMenu.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });

    this._btnViewMenu.addEventListener('mousedown', function () {
      this.style.transform = 'scale(1)';
    });
  }
}

export default new HomeView();
