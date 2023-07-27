import View from './View.js';

class NavView extends View {
  _navEl = document.createElement('div');
  _buttons = ['homeBtn', 'menuBtn', 'contactBtn'];

  constructor() {
    super();
    this._setNav();
    this._setBtnEffect();
  }

  sendBtn(i) {
    return this._buttons[i];
  }

  _setNav() {
    this._navEl.style.flex = 'none';

    for (let i = 0; i < this._buttons.length; i++) {
      const str = this._buttons[i];
      this._buttons[i] = document.createElement('button');
      this._buttons[i].textContent = str.split('B')[0].toUpperCase();
    }

    this._navEl.style.background = 'white';
    this._navEl.style.height = '60px';
    this._navEl.style.width = '100vw';

    this._navEl.style.display = 'flex';
    this._navEl.style.justifyContent = 'center';
    this._navEl.style.gap = '50px';

    this._buttons.forEach(btn => {
      btn.style.border = 'none';
      btn.style.background = 'none';
      btn.style.fontSize = '1.05rem';
    });

    this.bodyEl.insertAdjacentElement('afterbegin', this._navEl);
    this._buttons.forEach(btn => this._navEl.appendChild(btn));
  }

  _setBtnEffect() {
    const self = this;
    this._buttons.forEach(el => {
      el.addEventListener('mouseover', function () {
        el.style.transform = 'scale(1.1)';
        el.style.fontWeight = 'bold';
        el.style.color = self.fontColor;
      });

      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
        el.style.fontWeight = '';
        el.style.color = '';
      });
    });
  }
}

export default new NavView();
