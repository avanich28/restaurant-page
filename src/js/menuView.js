import MainView from './mainView.js';
import whiteBread from '../img/white-bread.jpg';
import croissant from '../img/croissant.jpg';
import pretzel from '../img/pretzel.jpg';
import baguette from '../img/baguette.jpg';
import wholeWheat from '../img/whole-wheat.jpg';
import challah from '../img/challah.jpg';
import bagel from '../img/bagel.jpg';
import boule from '../img/boule.jpg';

class MenuView extends MainView {
  _container = this.createDiv();
  _menu = [
    {
      img: whiteBread,
      name: 'white-bread',
      price: 50,
    },
    {
      img: croissant,
      name: 'croissant',
      price: 70,
    },
    {
      img: pretzel,
      name: 'pretzel',
      price: 30,
    },
    {
      img: baguette,
      name: 'baguette',
      price: 40,
    },
    {
      img: wholeWheat,
      name: 'whole-wheat',
      price: 60,
    },
    {
      img: challah,
      name: 'challah',
      price: 65,
    },
    {
      img: bagel,
      name: 'bagel',
      price: 20,
    },
    {
      img: boule,
      name: 'boule',
      price: 40,
    },
  ];

  constructor() {
    super();
    this._generateContent();
  }

  addHandlerClick(btn, clearBtnLineFunc) {
    btn.addEventListener(
      'click',
      this.render.bind(this, btn, clearBtnLineFunc)
    );
  }

  _generateContent() {
    this._setContainer();
    this._menu.forEach(menu => this._generateContentMenu(menu));
  }

  _setContainer() {
    this._container.style.height = '100%';
    this._container.style.width = '100%';
    this._container.style.display = 'grid';
    this._container.style.gridTemplateColumns =
      'repeat(auto-fill, minmax(230px, 1fr))';
    this._container.style.gap = '20px';
  }

  _createImage(img, name) {
    const myImage = new Image(180, 180);
    myImage.src = img;

    myImage.style.borderRadius = '50%';
    myImage.style.marginBottom = '10px';

    myImage.alt = name;
    return myImage;
  }

  _createPrice(cost) {
    const price = this.createDiv();
    price.textContent = `฿${cost}`;
    price.style.fontSize = '20px';
    price.style.fontWeight = 'bold';
    return price;
  }

  _createName(menu) {
    const name = this.createDiv();
    name.textContent = menu.split('-').join(' ').toUpperCase();
    name.style.fontWeight = 'bold';
    name.style.color = this.fontColor;
    return name;
  }

  _createDetail() {
    const detail = this.createPara();
    detail.textContent = 'Straight from our oven to you.';
    detail.style.fontSize = '0.8rem';
    return detail;
  }

  _generateContentMenu(data) {
    const card = this.createDiv();
    card.style.background = 'white';
    card.style.padding = '18px 0';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.gap = '7px';

    [
      this._createImage(data.img, data.name),
      this._createPrice(data.price),
      this._createName(data.name),
      this._createDetail(),
    ].forEach(el => card.insertAdjacentElement('beforeend', el));

    this._container.appendChild(card); // output
  }
}

export default new MenuView();
