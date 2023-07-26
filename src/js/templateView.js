import View from './View.js';
import backgroundImage from '../img/baker.jpeg';

class TemplateView extends View {
  _navEl = document.createElement('div');
  _footerEl = document.createElement('div');
  _para = document.createElement('p');

  constructor() {
    super();
    this._setDisplay();
    this._setBackground();
    this._setNav();
    this._setMain();
    this._setFooter();
  }

  _setDisplay() {
    this.bodyEl.style.display = 'flex';
    this.bodyEl.style.flexDirection = 'column';
    this.bodyEl.style.justifyContent = 'space-between';
  }

  _setBackground() {
    this.bodyEl.style.background = `url("${backgroundImage}") no-repeat`;
    this.bodyEl.style.backgroundSize = 'cover';
    this.bodyEl.style.backgroundPosition = 'right';
    this.bodyEl.style.height = '100vh';
    // this.bodyEl.style.minHeight = '430px';
    // this.bodyEl.style.overflow = 'auto';
  }

  _setNav() {
    for (let i = 0; i < this.buttons.length; i++) {
      const str = this.buttons[i];
      this.buttons[i] = document.createElement('button');
      this.buttons[i].textContent = str.split('B')[0].toUpperCase();
    }

    this._navEl.style.background = 'white';
    this._navEl.style.height = '60px';
    this._navEl.style.width = '100vw';

    this._navEl.style.display = 'flex';
    this._navEl.style.justifyContent = 'center';
    this._navEl.style.gap = '50px';

    this.buttons.forEach(btn => {
      btn.style.border = 'none';
      btn.style.background = 'none';
      btn.style.fontSize = '1.05rem';
    });

    this.bodyEl.insertAdjacentElement('afterbegin', this._navEl);
    this.buttons.forEach(btn => this._navEl.appendChild(btn));
  }

  _setMain() {
    this.contentEl.style.display = 'flex';
    this.contentEl.style.flexDirection = 'column';
    this.contentEl.style.justifyContent = 'center';
    this.contentEl.style.alignItems = 'center';
    this.contentEl.style.gap = '20px';
    this.contentEl.style.margin = '20px 15%';
    // this.contentEl.style.minHeight = '100%';
    // this.contentEl.style.marginBottom = '-50px';
    // this.contentEl.style.border = '1px solid red';
  }

  _setFooter() {
    this._footerEl.style.background = 'white';
    this._footerEl.style.height = '30px';
    this._footerEl.style.width = '100%';
    this._footerEl.style.position = 'absolute';
    this._footerEl.style.left = '0';
    this._footerEl.style.bottom = '0';
    this._footerEl.style.marginBottom = '0';
    this._footerEl.style.display = 'flex';
    this._footerEl.style.justifyContent = 'center';
    this._footerEl.style.alignItems = 'center';
    this._footerEl.style.fontSize = '0.8rem';

    this._para.textContent = '© Copyright by avanich28 : )';

    this._footerEl.appendChild(this._para);
    this.contentEl.insertAdjacentElement('afterend', this._footerEl);
  }
}

export default new TemplateView();
