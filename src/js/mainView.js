import View from './View.js';
import backgroundImage from '../img/baker.jpeg';

export default class MainView extends View {
  contentEl = document.querySelector('#content');

  constructor() {
    super();
    this._setBackground();
    this._setMain();
  }

  render() {
    this.contentEl.innerHTML = '';
    this.contentEl.appendChild(this._container);
  }

  _setBackground() {
    this.contentEl.style.background = `url("${backgroundImage}") no-repeat`;
    this.contentEl.style.backgroundSize = 'cover';
    this.contentEl.style.backgroundPosition = 'right';
  }

  _setMain() {
    this.contentEl.style.flex = '1 0 auto';

    this.contentEl.style.padding = '20px 15%';
    this.contentEl.style.display = 'flex';
    this.contentEl.style.flexDirection = 'column';
    this.contentEl.style.justifyContent = 'center';
    this.contentEl.style.alignItems = 'center';
    this.contentEl.style.gap = '20px';
  }
}
