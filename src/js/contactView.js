import MainView from './mainView.js';

class ContactView extends MainView {
  _container = this.createDiv();
  _cards = [];

  constructor() {
    super();
    this._generateContent();
  }

  addHandlerClick(btn, clearBtnLineFunc) {
    btn.addEventListener('click', this.render.bind(this, btn, clearBtnLineFunc));
  }

  _generateContent() {
    this._setContainer();
    this._createCard();
    this._generateOpenClose();
    this._generateCall();
    this._generateAddress();

    this._cards.forEach(card => this._container.appendChild(card)); // output
    // this.contentEl.appendChild(this._container);
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

  _addCardChild(arr, i) {
    arr.forEach(el => this._cards[i].appendChild(el));
  }

  _convertToBold(...arr) {
    arr.forEach(el => (el.style.fontWeight = 'bold'));
  }

  _setMarginBottom(el) {
    el.style.marginBottom = '15px';
  }

  _generateOpenClose() {
    const head = this.createDiv();
    const day = this.createPara();
    const hour = this.createPara();
    const weekend = this.createPara();
    const hourWeekend = this.createPara();

    head.textContent = 'HOURS';
    day.textContent = 'Monday - Friday';
    hour.textContent = '9am - 7pm';
    weekend.textContent = 'Saturday - Sunday';
    hourWeekend.textContent = '10am - 6pm';

    this._convertToBold(head, day, weekend);
    this._setMarginBottom(head);
    [day, weekend].forEach(el => (el.style.color = this.fontColor));

    this._addCardChild([head, day, hour, weekend, hourWeekend], 0);
  }

  _generateCall() {
    const head = this.createDiv();
    const tel = this.createPara();

    head.textContent = 'CALL US';
    tel.textContent = '(66) 98-765-4321';

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

    head.textContent = 'FIND US';
    para1.textContent = '182 Chakrapong Road';
    para2.textContent = 'Chana Songkram';
    para3.textContent = 'Phra Nakhon,';
    para4.textContent = 'Bangkok, Thailand';

    this._convertToBold(head);
    this._setMarginBottom(head);

    this._addCardChild([head, para1, para2, para3, para4], 2);
  }
}

export default new ContactView();
