import MainView from './mainView.js';

class ContactView extends MainView {
  _container = this.createDiv();
  _cards = [];

  constructor() {
    super();
    this._generateContent();
  }

  addHandlerClick(btn, btnArr) {
    btn.addEventListener('click', this.render.bind(this, btn, btnArr));
  }

  _generateContent() {
    this._setContainer();
    this._createCard();
    this._generateOpenClose();
    this._generateCall();
    this._generateAddress();

    this._cards.forEach(card => this._container.appendChild(card)); // output
  }

  _setContainer() {
    this._container.style.padding = '20px';
    this._container.style.background = 'white';

    this._container.style.display = 'flex';
    this._container.style.flexWrap = 'wrap';
    this._container.style.gap = '50px';
  }

  _createCard() {
    for (let i = 0; i < 3; i++) {
      const card = this.createDiv();
      card.style.flex = '1 0 auto';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.gap = '8px';
      this._cards.push(card);
    }
  }

  _addTextContent(el, text) {
    el.forEach((el, i) => (el.textContent = text[i]));
  }

  _convertToBold(...arr) {
    arr.forEach(el => (el.style.fontWeight = 'bold'));
  }

  _setMarginBottom(el) {
    el.style.marginBottom = '15px';
  }

  _addCardChild(arr, i) {
    arr.forEach(el => this._cards[i].appendChild(el));
  }

  _generateOpenClose() {
    const head = this.createDiv();
    const day = this.createPara();
    const hour = this.createPara();
    const weekend = this.createPara();
    const hourWeekend = this.createPara();

    const text = [
      'HOURS',
      'Monday - Friday',
      '9am - 7pm',
      'Saturday - Sunday',
      '10am - 6pm',
    ];
    this._addTextContent([head, day, hour, weekend, hourWeekend], text);

    this._convertToBold(head, day, weekend);
    this._setMarginBottom(head);
    [day, weekend].forEach(el => (el.style.color = this.fontColor));

    this._addCardChild([head, day, hour, weekend, hourWeekend], 0);
  }

  _generateCall() {
    const head = this.createDiv();
    const tel = this.createPara();

    const text = ['CALL US', '(66) 98-765-4321'];
    this._addTextContent([head, tel], text);

    this._convertToBold(head);
    this._setMarginBottom(head);

    this._addCardChild([head, tel], 1);
  }

  _generateAddress() {
    const head = this.createDiv();
    const para1 = this.createPara();
    const para2 = this.createPara();
    const para3 = this.createPara();
    const para4 = this.createPara();

    const text = [
      'FIND US',
      '182 Chakrapong Road',
      'Chana Songkram',
      'Phra Nakhon,',
      'Bangkok, Thailand',
    ];
    this._addTextContent([head, para1, para2, para3, para4], text);

    this._convertToBold(head);
    this._setMarginBottom(head);

    this._addCardChild([head, para1, para2, para3, para4], 2);
  }
}

export default new ContactView();
