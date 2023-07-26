import '../style.css';

export default class View {
  bodyEl = document.body;
  contentEl = document.querySelector('#content');
  buttons = ['homeBtn', 'menuBtn', 'contactBtn'];

  render() {
    this.contentEl.innerHTML = '';
    this._generateContent();
  }
}
